import styled, { css } from "styled-components";
import { useReadCabin } from "../cabins/useReadCabin";
import { formatCurrency } from "../../utils/helpers";
import SpinnerMini from "../../ui/SpinnerMini";
import BtnGarden from "../../ui/BtnGarden";
import DateCalendar from "./DateCalendar";
import { useBookingInfo } from "../../contexts/BookingInfoContext";
import BookingInfoInput from "./BookingInfoInput";
import BookingPriceInfo from "./BookingPriceInfo";

const Column = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const ContainerColumn = styled.div`
  ${Column}
  padding: 1rem 2rem;
  margin: 2rem;
  border: solid 1px #ced4da;
  border-radius: 20px;
  ont-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  width: 30%;
  /* For Tablets */
  @media screen and (max-width: 820px) {
    width: 95%;
    margin: 1rem;
  }
`;
const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0;
`;
const DiscountCont = styled.div`
  align-self: end;
  font-size: small;
  border-radius: 50px;
  background: #ccd5ae;
  color: black;
  padding: 2%;
  font-weight: 500 !important;
`;

const OldPrice = styled.p`
  color: gray;
  text-decoration-line: line-through;
`;
const StyledPrice = styled.div`
  border-bottom: solid 1px #ced4da;
  padding-bottom: 1.5rem;
  font-weight: bold;
`;
const Price = styled.div`
  display: flex;
  gap: 1rem;
`;
const Note = styled.p`
  color: gray;
  font-weight: 500;
  align-self: center;
`;

function BookSidebar() {
  const { cabin, isLoading } = useReadCabin();
  const { dispatch } = useBookingInfo();

  const price = cabin.regularPrice - cabin.discount;

  const handleNumNights = (data) => {
    dispatch({ type: "nights", payload: data });
  };
  if (isLoading) return <SpinnerMini />;
  return (
    <ContainerColumn>
      <StyledPrice>
        {cabin.discount > 0 ? (
          <PriceRow>
            <Price>
              {formatCurrency(price)}/Night
              <OldPrice>{formatCurrency(cabin.regularPrice)}</OldPrice>
            </Price>
            <DiscountCont>{formatCurrency(cabin.discount)}</DiscountCont>
          </PriceRow>
        ) : (
          <div>{formatCurrency(cabin.regularPrice)}/Night</div>
        )}
      </StyledPrice>
      <DateCalendar numNights={handleNumNights} />
      <BookingInfoInput />
      <BookingPriceInfo />
      <BtnGarden>Book</BtnGarden>
      <Note>You will not be charged yet</Note>
    </ContainerColumn>
  );
}

export default BookSidebar;
