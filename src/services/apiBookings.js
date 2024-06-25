// import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function getBookings(cabinID) {
  let { data: bookings, error } = await supabase
    .from("bookings")
    .select("startDate, endDate")
    .eq("cabinId", cabinID)
    .neq("status", "checked-out");

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return bookings;
}
export async function createBooking(BookingInfo) {
  const { data, guestBooking } = BookingInfo;
  const id = Math.floor(Math.random() * (5000 - 100 + 1));
  console.log({ ...data });
  console.log("-----------");
  console.log({ ...guestBooking });

  const { error: guestError } = await supabase
    .from("guests")
    .insert([{ ...data, id }]);
  createBookingII(guestBooking, id);
  if (guestError) {
    throw new Error(guestError?.message);
  }
}
async function createBookingII(guestBooking, id) {
  const { error: bookingError } = await supabase
    .from("bookings")
    .insert([{ ...guestBooking, guestId: id }]);
  console.log({ ...guestBooking });

  if (bookingError) {
    throw new Error(bookingError?.message);
  }
}
