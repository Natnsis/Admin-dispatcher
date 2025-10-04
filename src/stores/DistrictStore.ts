import { create } from "zustand";
import axios, { type AxiosResponse } from "axios";
//types
export type DistrictType = {
  id?: string;
  name: string;
  longitude: number;
  latitude: number;
  createdAt?: string;
  updatedAt?: string;
};

export type DistrictStore = {
  response: AxiosResponse | null;
  error: null | any;
  districts: DistrictType[];
  addDistrict: (data: DistrictType) => Promise<void>;
  deleteDistrict: (id: string) => Promise<void>;
  getDistrict: () => Promise<void>;
};

//api
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const useDistrictStore = create<DistrictStore>()((set, get) => ({
  response: null,
  error: null,
  districts: [],
  deleteDistrict: async (id: string) => {
    const originalDistricts = get().districts;
    set((state) => ({
      districts: state.districts.filter((d) => d.id !== id),
      response: null,
      error: null,
    }));

    try {
      const response = await api.delete(`/district/${id}`);
      set({ response: response, error: null });
    } catch (e) {
      console.error("Deletion failed, rolling back:", e);
      set({ error: e, response: null, districts: originalDistricts });
    }
  },
  addDistrict: async (data: DistrictType) => {
    try {
      const response = await api.post("/district", data);
      set({ response: response, error: null });
    } catch (e) {
      set({ error: e });
    }
  },
  getDistrict: async () => {
    try {
      const response = await api.get("/district");
      set({ districts: response.data, error: null, response: response });
    } catch (e) {
      set({ error: e });
    }
  },
}));
