import { useMutation } from "@tanstack/react-query";
import { createBooking as createBookingAPI } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCreateBooking() {
  // const queryClient = useQueryClient();
  const { mutate: createBooking, isLoading: isCreating } = useMutation({
    mutationFn: createBookingAPI,
    onSuccess: () => {
      toast.success("Booking successfully created! We are waiting you.");
      // queryClient.invalidateQueries({
      //   queryKey: ["bookings"],
      // });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createBooking };
}
