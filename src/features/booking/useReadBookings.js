import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useReadBookings() {
  const { cabinID } = useParams();
  const {
    isLoading,
    data: bookings,
    //error,
  } = useQuery({
    queryKey: ["bookings", cabinID],
    queryFn: () => getBookings(cabinID),
  });
  return { isLoading, bookings };
}
