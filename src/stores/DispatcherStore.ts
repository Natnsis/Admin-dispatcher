import { create } from "zustand";
import axios from "axios";

// 🔹 Types
export type DispatcherType = {
  fName: string;
  lName: string;
  username: string;
  password: string;
  districtId: string;
  image: File | null;
};

type DispatcherStore = {
  dispatchers: DispatcherType[];
  user: DispatcherType | null;
  loading: boolean;
  error: string | null;
  response: string | null;
  getDispatcher: (id: string) => Promise<void>;
  getDispatchers: () => Promise<void>;
  deleteDispatcher: (id: string) => Promise<void>;
  updateDispatcher: (
    id: string,
    data: Partial<DispatcherType>
  ) => Promise<void>;
  addDispatcher: (data: DispatcherType) => Promise<void>;
};

// 🔹 API setup
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// 🔹 Store
export const useDispatcherStore = create<DispatcherStore>()((set, get) => ({
  dispatchers: [],
  user: null,
  loading: false,
  error: null,
  response: null,

  // 🔸 Get all dispatchers
  getDispatchers: async () => {
    try {
      set({ loading: true });
      const res = await api.get("/dispatcher");
      set({ dispatchers: res.data, error: null });
    } catch (err: any) {
      console.error("Error fetching dispatchers:", err);
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  // 🔸 Get single dispatcher
  getDispatcher: async (id: string) => {
    try {
      set({ loading: true });
      const res = await api.get(`/dispatcher/${id}`);
      set({ user: res.data, error: null });
    } catch (err: any) {
      console.error("Error fetching dispatcher:", err);
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  // 🔸 Add dispatcher
  addDispatcher: async (data: DispatcherType) => {
    try {
      set({ loading: true, error: null, response: null });

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== null) formData.append(key, value as any);
      });

      console.log("📤 Sending FormData:", Object.fromEntries(formData));
      const res = await api.post("/dispatcher", formData);

      console.log("✅ Backend response:", res.data);

      set({
        response: res.data?.message || "Dispatcher added successfully",
        error: null,
        loading: false,
      });

      // Refresh the dispatcher list
      await get().getDispatchers();
    } catch (err: any) {
      console.error("Error in addDispatcher:", err);

      // Capture both frontend and backend error messages
      const message =
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message ||
        "Unknown error";

      set({
        error: message,
        response: `Failed to add dispatcher: ${message}`,
        loading: false,
      });
    } finally {
      set({ loading: false });
    }
  },

  // 🔸 Update dispatcher
  updateDispatcher: async (id: string, data: Partial<DispatcherType>) => {
    try {
      set({ loading: true });
      const res = await api.put(`/dispatcher/${id}`, data);
      set({ response: res.data?.message || "Dispatcher updated successfully" });
      await get().getDispatchers();
    } catch (err: any) {
      console.error("Error updating dispatcher:", err);
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  // 🔸 Delete dispatcher
  deleteDispatcher: async (id: string) => {
    try {
      set({ loading: true });
      const res = await api.delete(`/dispatcher/${id}`);
      set({ response: res.data?.message || "Dispatcher deleted successfully" });
      await get().getDispatchers();
    } catch (err: any) {
      console.error("Error deleting dispatcher:", err);
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));
