import Row from "./Row";
import { useEffect } from "react";
import { useBookingInfo } from "../contexts/BookingInfoContext";
import { formatCurrency } from "../utils/helpers";
import styled from "styled-components";
import { useReadSettings } from "../features/booking/useReadSettings";
const StyledCheckbox = styled.div`
  & input[type="checkbox"] {
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }
`;
function Checkbox({ reducertype, id, onChange, children, cost, disable }) {
  const { settings } = useReadSettings();
  const { dispatch, isBreakfast, breakfastPrice } = useBookingInfo();
  const neg = ~cost + 1;

  useEffect(
    function () {
      if (reducertype === "breakfast") {
        document.getElementById(id)?.addEventListener("change", function () {
          if (!this.checked) {
            dispatch({ type: `${reducertype}`, payload: 0 });
          }
        });
      }
    },
    [
      reducertype,
      dispatch,
      id,
      settings?.brakfastPrice,
      isBreakfast,
      breakfastPrice,
    ]
  );

  useEffect(
    function () {
      document.getElementById(id).addEventListener("change", function () {
        if (!this.checked) {
          dispatch({ type: `${reducertype}`, payload: Number(neg) });
        }
      });
    },
    [dispatch, id, reducertype, neg]
  );

  return (
    <Row>
      <StyledCheckbox>
        <input type="checkbox" id={id} onChange={onChange} disabled={disable} />{" "}
        <span htmlFor={id}>{children}</span>
      </StyledCheckbox>
      <span>{cost > 0 ? formatCurrency(cost) : "Free"}</span>
    </Row>
  );
}

export default Checkbox;
