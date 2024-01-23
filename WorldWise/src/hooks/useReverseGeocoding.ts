import reverseGeocodingService from "@/services/reverseGeocoding";
import { ReverseGeocodingResponse } from "@/types/reverseGeocoding";
import { useEffect, useState } from "react";

type ReverseGeocodingHookProps = {
  lat?: string;
  lng?: string;
};

export const useReverseGeocoding = ({
  lat,
  lng,
}: ReverseGeocodingHookProps) => {
  const [reverseGeocoding, setReverseGeocoding] =
    useState<ReverseGeocodingResponse>();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [geocodingError, setGeocodingError] = useState<string | null>(null);

  // TODO: Implement regex to determine when a citiname is not in the response.

  useEffect(() => {
    async function getReverseGeocoding() {
      if (!lat || !lng) return;

      try {
        setIsLoadingGeocoding(true);
        const { data } = await reverseGeocodingService.getReverseGeocoding(
          lat,
          lng
        );

        if (!data)
          throw new Error(
            "The selected point is not a city. Try again somewhere else."
          );

        setReverseGeocoding(data);
        setGeocodingError(null);
      } catch (err) {
        if (err instanceof Error) {
          setGeocodingError(err.message);
        }
      } finally {
        setIsLoadingGeocoding(false);
      }
    }

    getReverseGeocoding();
  }, [lat, lng]);

  return {
    reverseGeocoding,
    isLoadingGeocoding,
    geocodingError,
  };
};
