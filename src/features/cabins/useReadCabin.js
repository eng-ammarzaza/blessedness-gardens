import { useQuery } from "@tanstack/react-query";
import { getCabin } from "../../services/apiCabins";
import { useParams } from "react-router-dom";

export function useReadCabin() {
  const { cabinID } = useParams();

  const {
    isLoading,
    data: cabin,
    error,
  } = useQuery({
    queryKey: ["cabin", cabinID],
    queryFn: () => getCabin(cabinID),
    retry: false,
  });
  return { isLoading, error, cabin };
}
