import { useSearchParams } from "react-router-dom";

export const useUrlPosition = () => {
  const [searchParams] = useSearchParams();

  const lat = searchParams.get("lat") ?? undefined;
  const lng = searchParams.get("lng") ?? undefined;

  return { lat, lng };
};
