import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

//types
export type userData = {
  username: string;
  password: string;
};

type user = {
  userId: string;
  role: string;
};

type TokenPayload = {
  user: user;
  exp: number;
  iat: number;
};

export type User = {
  userId: string;
  role: string;
};

type AuthTypes = {
  token: null;
  user: TokenPayload | null;
  error: null;
  login: (data: userData) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
  isTokenExpired: () => boolean;
  isTokenExpiringSoon: () => boolean;
};

//api
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

//store
export const useAuthStore = create<AuthTypes>()(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      error: null,

      login: async (userData: userData) => {
        try {
          const res = await api.post("/auth/admin-login", userData);
          const token = res.data.accessToken;
          const user = jwtDecode<TokenPayload>(token);
          set({ token, user, error: null });
        } catch (err: any) {
          set({ error: err.response?.data?.message || err.message });
          throw err;
        }
      },

      logout: async () => {
        try {
          await api.post("/auth/logout");
        } catch (err) {
          console.warn("Logout request failed:", err);
        }
        set({ token: null, user: null, error: null });
      },

      refresh: async () => {
        try {
          const res = await api.post("/auth/refresh");
          const token = res.data.accessToken;
          const user = jwtDecode<TokenPayload>(token);
          set({ token, user });
          return token;
        } catch (err) {
          console.error("Refresh failed:", err);
          set({ token: null, user: null });
          return null;
        }
      },

      isTokenExpired: () => {
        const { user } = get();
        if (!user?.exp) return true;
        return Date.now() >= user.exp * 1000;
      },

      isTokenExpiringSoon: () => {
        const { user } = get();
        if (!user?.exp) return true;
        return Date.now() >= user.exp * 1000 - 30_000;
      },
    }),
    { name: "auth-storage" }
  )
);

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await useAuthStore.getState().refresh();

        const newToken = useAuthStore.getState().token;
        if (newToken) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        }
      } catch (err) {
        console.error("Token refresh failed:", err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
