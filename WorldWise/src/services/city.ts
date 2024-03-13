import { serverApi } from "../api/serverApi";
import { City, CreateCity } from "../interfaces/city";

export default {
  getCities: async () => {
    const response = await serverApi.get<City[]>("/cities");
    return response;
  },
  getCity: async (id: string) => {
    const response = await serverApi.get<City>(`/cities/${id}`);
    return response;
  },
  createCity: async (city: CreateCity) => {
    const response = await serverApi.post<City>("/cities", city);
    return response;
  },
  deleteCity: async (id: string | number) => {
    const response = await serverApi.delete<City>(`/cities/${id}`);
    return response;
  },
};
