import { create } from "zustand";
import axios, { type AxiosResponse } from "axios";
//types
export type DistrictType = {
  id?: string;
  name: string;
  longitude: string;
  latitude: string;
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
    try {
      const response = await api.post(`/deleteDistrict/${id}`);
      set({ response: response, error: null });
    } catch (e) {
      set({ error: e });
    }
  },
  addDistrict: async (data: DistrictType) => {
    try {
      const response = await api.post("/addDistrict", data);
      set({ response: response, error: null });
    } catch (e) {
      set({ error: e });
    }
  },
  getDistrict: async () => {
    try {
      const response = await api.get("/getDistrict");
      set({ districts: response.data, error: null, response: response });
    } catch (e) {
      set({ error: e });
    }
  },
}));
