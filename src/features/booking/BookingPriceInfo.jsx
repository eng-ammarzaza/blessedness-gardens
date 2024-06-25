import { FaMoneyBill } from "react-icons/fa";
import MiniColumn from "../../ui/MiniColumn";
import SubTitle from "../../ui/SubTitle";
import Icon from "../../ui/Icon";
import GrayCont from "../../ui/GrayCont";
import Row from "../../ui/Row";
import { formatCurrency } from "../../utils/helpers";
import { FaMoneyBills } from "react-icons/fa6";
import { useReadCabin } from "../cabins/useReadCabin";
import { useBookingInfo } from "../../contexts/BookingInfoContext";
import { useEffect } from "react";

function BookingPriceInfo() {
  const { cabin } = useReadCabin();
  const { numNights, breakfastPrice, extraFeatures, dispatch } =
    useBookingInfo();
  const bill =
    numNights > 0
      ? cabin.regularPrice * numNights -
        cabin.discount * numNights +
        breakfastPrice +
        extraFeatures
      : 0;

  if (breakfastPrice < 0) dispatch({ type: "breakfast", payload: 0 });
  useEffect(
    function () {
      dispatch({ type: "nights", payload: 0 });
      dispatch({ type: "breakfast", payload: 0 });
      dispatch({ type: "extraFeatures", payload: 0 });
    },
    [dispatch]
  );
  useEffect(
    function () {
      if (bill > 0) dispatch({ type: "totalPayment", payload: bill });
    },
    [dispatch, bill]
  );
  return (
    <>
      <MiniColumn>
        <SubTitle>
          Price
          <Icon>
            <FaMoneyBill />
          </Icon>
        </SubTitle>
        <GrayCont>
          <Row>
            <span>{numNights} Night/s</span>
            {formatCurrency(numNights * cabin.regularPrice)}
          </Row>

          <Row>
            <span>Discount </span>-
            {cabin.discount > 0
              ? formatCurrency(numNights * cabin.discount)
              : formatCurrency(0)}
          </Row>

          <Row>
            <span>Breakfast</span>
            {formatCurrency(breakfastPrice)}
          </Row>
          <Row>
            <span>Extra Features</span>
            {formatCurrency(extraFeatures)}
          </Row>
        </GrayCont>
      </MiniColumn>
      <Row>
        <SubTitle>
          Total Payment
          <Icon>
            <FaMoneyBills />
          </Icon>
        </SubTitle>
        {formatCurrency(bill)}
      </Row>
    </>
  );
}

export default BookingPriceInfo;
