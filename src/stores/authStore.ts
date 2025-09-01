import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

// types
type InputData = {
  email: string;
  password: string;
};

type TokenPayload = {
  userId: string;
  exp: number;
  iat: number;
};

type UseAuthStore = {
  token: string | null;
  userId: string | null;
  error: string | null;
  login: (inputData: InputData) => Promise<void>;
  logout: () => void;
  refresh: () => Promise<void>;
  isTokenExpired: () => boolean;
  isTokenExpiringSoon: () => boolean;
};

// axios instance
const api = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

// zustand store
export const useAuthStore = create<UseAuthStore>()(
  persist(
    (set, get) => ({
      token: null,
      userId: null,
      error: null,

      // login
      login: async (inputData: InputData) => {
        try {
          const res = await api.post("/api/login", inputData);
          const token = res.data.accessToken;
          const decoded = jwtDecode<TokenPayload>(token);
          set({ token, userId: decoded.userId, error: null });
        } catch (err: any) {
          set({ error: err.response?.data?.message || err.message });
          throw err;
        }
      },

      // logout
      logout: async () => {
        try {
          await api.post("/api/logout");
        } catch (err) {
          console.error("Logout failed", err);
        } finally {
          set({ token: null, userId: null, error: null });
        }
      },

      // refresh
      refresh: async () => {
        try {
          const res = await api.post("/api/refresh"); // gets new access token
          const token = res.data.accessToken;
          const decoded = jwtDecode<TokenPayload>(token);
          set({ token, userId: decoded.userId, error: null });
        } catch (err) {
          console.error("Token refresh failed", err);
          set({ token: null, userId: null, error: null });
        }
      },

      // expiration check
      isTokenExpired: () => {
        const { token } = get();
        if (!token) return true;
        const decoded = jwtDecode<TokenPayload>(token);
        return Date.now() >= decoded.exp * 1000;
      },

      isTokenExpiringSoon: () => {
        const { token } = get();
        if (!token) return true;
        const decoded = jwtDecode<TokenPayload>(token);
        return Date.now() >= decoded.exp * 1000 - 30_000; // 30 sec buffer
      },
    }),
    { name: "auth-storage" }
  )
);

// request interceptor (attach token)
api.interceptors.request.use(async (config) => {
  const { token, isTokenExpired, refresh } = useAuthStore.getState();

  if (token && isTokenExpired()) {
    await refresh();
    config.headers.Authorization = `Bearer ${useAuthStore.getState().token}`;
  } else if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// response interceptor (retry once on 401)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await useAuthStore.getState().refresh();
        originalRequest.headers.Authorization = `Bearer ${
          useAuthStore.getState().token
        }`;
        return api(originalRequest);
      } catch (err) {
        useAuthStore.getState().logout();
        throw err;
      }
    }

    throw error;
  }
);
