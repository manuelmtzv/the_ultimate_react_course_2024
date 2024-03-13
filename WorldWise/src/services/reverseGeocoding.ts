import { reverseGeocodingApi } from "@/api/reverseGeocodingApi";
import { ReverseGeocodingResponse } from "@/types/reverseGeocoding";

export default {
  getReverseGeocoding: async (lat: string | number, lng: string | number) => {
    const response = await reverseGeocodingApi.get<ReverseGeocodingResponse>(
      `?latitude=${lat}&longitude=${lng}`
    );
    return response;
  },
};
