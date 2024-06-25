import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";
export function useReadSettings() {
  const {
    data: settings,
    isLoading,
    error,
  } = useQuery({
    querykey: ["settings"],
    queryFn: getSettings,
  });
  return {
    settings,
    isLoading,
    error,
  };
}
