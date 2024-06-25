import { useQuery } from "@tanstack/react-query";
import { getAround } from "./apiBackgrounds";

export function useAround() {
  const { isLoading, data: around } = useQuery({
    queryKey: ["around"],
    queryFn: getAround,
  });
  return { isLoading, around };
}
