import { createContext, useContext, useReducer } from "react";

const BookingInfoContext = createContext();

const initialState = {
  numGuests: 0,
  numNights: 0,
  isBreakfast: false,
  breakfastPrice: 0,
  extraFeatures: 0,
  extraPillow: false,
  parking: false,
  transport: false,
  observation: "",
  totalPayment: 0,
  startDate: {},
  endDate: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "guests":
      return {
        ...state,
        numGuests: action.payload,
      };

    case "nights":
      return {
        ...state,
        numNights: action.payload,
      };
    case "breakfast":
      return {
        ...state,
        isBreakfast: action.payload > 0 ? true : false,
        breakfastPrice: state.numNights * state.numGuests * action.payload,
      };
    case "extraPillow":
      return {
        ...state,
        extraPillow: true,
        observation: "Extra Pillow",
      };
    case "parking":
      return {
        ...state,
        parking: true,
        extraFeatures: state.extraFeatures + action.payload,
      };
    case "transport":
      return {
        ...state,
        transport: true,
        extraFeatures: state.extraFeatures + action.payload,
      };
    case "extraFeatures":
      return {
        ...state,
        extraFeatures: action.payload,
      };

    case "observation":
      return {
        ...state,
        observation: action.payload,
      };
    case "startDate":
      return {
        ...state,
        startDate: action.payload,
      };
    case "endDate":
      return {
        ...state,
        endDate: action.payload,
      };
    case "totalPayment":
      return {
        ...state,
        totalPayment: action.payload,
      };
    case "reset":
      return initialState;
    default:
      throw new Error("Action unkonwn");
  }
}
function BookingInfoProvider({ children }) {
  const [
    {
      numGuests,
      numNights,
      isBreakfast,
      breakfastPrice,
      extraFeatures,
      extraPillow,
      parking,
      transport,
      observation,
      startDate,
      endDate,
      totalPayment,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <BookingInfoContext.Provider
      value={{
        numGuests,
        numNights,
        isBreakfast,
        breakfastPrice,
        extraFeatures,
        extraPillow,
        parking,
        transport,
        observation,
        totalPayment,
        startDate,
        endDate,
        dispatch,
      }}
    >
      {children}
    </BookingInfoContext.Provider>
  );
}

function useBookingInfo() {
  const context = useContext(BookingInfoContext);
  if (context === undefined)
    throw new Error(
      "BookingInfoContext was used outside of the BookingInfoProvider"
    );
  return context;
}

export { BookingInfoProvider, useBookingInfo };
