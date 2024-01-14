import { serverApi } from "../api/serverApi";
import { City } from "../interfaces/city";

export default {
  getCities: async () => {
    const response = await serverApi.get<City[]>("/cities");
    return response;
  },
  getCity: async (id: string) => {
    const response = await serverApi.get<City>(`/cities/${id}`);
    return response;
  },
};
