import axios from "axios";

export const reverseGeocodingApi = axios.create({
  baseURL: import.meta.env.VITE_REVERSE_GEOCODING_API_BASE_URL,
});
