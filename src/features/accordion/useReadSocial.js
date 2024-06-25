import { useQuery } from "@tanstack/react-query";
import { getSocial } from "../../services/apiSocial";

export function useReadSocial() {
  const {
    isLoading,
    data: social,
    //error,
  } = useQuery({
    queryKey: ["social"],
    // query function which is responsible for quering/fetching the data
    queryFn: getSocial,
  });
  return { isLoading, social };
}
