import axios from "axios";

export const serverApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
