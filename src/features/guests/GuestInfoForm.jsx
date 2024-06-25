import { useForm, Controller } from "react-hook-form";
import { CountryDropdown } from "react-country-region-selector";
import { useReadCabin } from "../cabins/useReadCabin";
import { useBookingInfo } from "../../contexts/BookingInfoContext";
import { useCreateBooking } from "../booking/useCreateBooking";
import Input from "../../ui/input";
import Spinner from "../../ui/Spinner";
import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import ModalBtn from "../../ui/ModalBtn";
function GuestInfoForm({ onCloseModal }) {
  const { register, handleSubmit, formState, control } = useForm();
  const { isCreating, createBooking } = useCreateBooking();
  const { cabin } = useReadCabin();
  const {
    numGuests,
    numNights,
    isBreakfast: hasBreakfast,
    totalPayment: totalPrice,
    startDate,
    endDate,
    extraFeatures: extrasPrice,
    observation,
    dispatch,
  } = useBookingInfo();
  const cabinPrice = cabin.regularPrice;
  const cabinId = cabin.id;
  const status = "unconfirmed";
  const isPaid = false;
  const observations = observation;
  const guestId = 0;
  const guestBooking = {
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    status,
    hasBreakfast,
    isPaid,
    observations,
    cabinId,
    guestId,
  };
  function onSubmit(data) {
    createBooking({ data, guestBooking });
    onCloseModal?.();
    dispatch({ type: "reset" });
  }
  function onError() {}
  const { errors } = formState;
  if (isCreating) return <Spinner />;
  return (
    <>
      <h3>
        Please fill out this information in order to continue the booking
        process.
      </h3>

      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow
          label={"Enter your full name"}
          error={errors?.fullName?.message}
        >
          <Input
            type="text"
            id="name"
            {...register("fullName", {
              required: "Full Name is required",
            })}
          />
        </FormRow>

        <FormRow label={"Enter your E-mail"} error={errors?.email?.message}>
          <Input
            type="text"
            id="email"
            {...register("email", {
              required: "E-mail is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please Enter A Valid Email!",
              },
            })}
          />
        </FormRow>

        <FormRow
          label={"Enter your nationalID"}
          error={errors?.nationalID?.message}
        >
          <Input
            type="text"
            id="nationalID"
            {...register("nationalID", {
              required: "NationalID is required",
            })}
          />
        </FormRow>

        <FormRow
          label={" Select your country"}
          error={errors?.nationality?.message}
        >
          <Controller
            name="nationality"
            control={control}
            render={({ field: { onChange } }) => (
              <CountryDropdown
                id="nationality"
                onChange={onChange}
                style={{
                  border: "1px solid var(--color-grey-300)",
                  backgroundColor: "var(--color-grey-0)",
                  borderRadius: "var(--border-radius-sm)",
                  padding: "0.8rem 1.2rem",
                  boxShadow: "var(--shadow-sm)",
                }}
              />
            )}
          />
        </FormRow>
        <FormRow>
          <ModalBtn>Continue</ModalBtn>
          <ModalBtn btn_bg="secondary" onClick={() => onCloseModal?.()}>
            Cancel
          </ModalBtn>
        </FormRow>
      </Form>
    </>
  );
}

export default GuestInfoForm;
