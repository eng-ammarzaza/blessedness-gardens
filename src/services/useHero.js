import { useQuery } from "@tanstack/react-query";
import { getHero } from "./apiBackgrounds";

export function useHero() {
  const { isLoading, data: video } = useQuery({
    queryKey: ["hero"],
    // query function which is responsible for quering/fetching the data
    queryFn: getHero,
  });
  return { isLoading, video };
}
