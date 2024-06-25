import { useReadBookings } from "./useReadBookings";
import { useState } from "react";
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { nextDatee } from "../../utils/helpers";
import { eachDayOfInterval, intervalToDuration } from "date-fns";
import { IoCloseCircleOutline } from "react-icons/io5";
import Calendar from "react-calendar";
import styled from "styled-components";
import MiniColumn from "../../ui/MiniColumn";
import Row from "../../ui/Row";
import GrayCont from "../../ui/GrayCont";
import Icon from "../../ui/Icon";
import { useBookingInfo } from "../../contexts/BookingInfoContext";
import SubTitle from "../../ui/SubTitle";

const Container = styled.div`
  display: flex;
  gap: 1.5rem;
  background-color: #e9ecef;
  border-radius: 10px;
  padding: 1rem 2rem;
`;
const ClaendarContainer = styled.div`
  displat: flex;
  flex-direction: column;
  background-color: white;
`;
const StyledCalendar = styled.div`
  width: 25%;
  position: absolute;
  z-index: 12;
  border-radius: 10px;
  background-color: white;
  /* for mobiles */
  @media screen and (max-width: 430px) {
    width: 60%;
  }
  /* For Tablets */
  @media screen and (max-width: 820px) {
    width: 80%;
  }
  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
  }
  button {
    margin: 3px;
    background-color: white;
    border: 0;
    border-radius: 3px;
    color: black;
    padding: 5px 0;

    &:hover {
      background-color: var(--color-brand-500);
      color: white;
    }

    &:active {
      background-color: var(--color-brand-500);
    }
  }
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: black;
  }
  .react-calendar__tile--range {
    /* box-shadow: 0 0 6px 2px black; */
    background-color: var(--color-brand-200);
    font-style: italic;
    font-weight: 500;
    color: var(--color-brand-900);
  }
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
  .react-calendar__tile:disabled,
  .react-calendar__navigation button:disabled {
    text-decoration-line: line-through;
    color: gray;
    background-color: white;
    cursor: default;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: white;
    color: black;
  }
`;
function DateCalendar({ numNights }) {
  const { bookings } = useReadBookings();
  const [isOpen, setIsopen] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { dispatch } = useBookingInfo();
  const reservedDatesFetched = bookings?.map((booking) =>
    eachDayOfInterval({ start: booking.startDate, end: booking.endDate })
  );
  const reservedDates = reservedDatesFetched?.flat();

  const tileDisabled = ({ date, view }) => {
    if (view === "month") {
      return reservedDates.some(
        (disabledDate) =>
          date.getFullYear() === disabledDate.getFullYear() &&
          date.getMonth() === disabledDate.getMonth() &&
          date.getDate() === disabledDate.getDate()
      );
    }
  };

  function handleSelect(e) {
    setStartDate(nextDatee(e["0"]));
    setEndDate(e["1"].toISOString().split("T")[0]);
    const nights = intervalToDuration({
      start: e["0"],
      end: e["1"],
    }).days;
    numNights(nights);
    dispatch({ type: "startDate", payload: e["0"] });
    dispatch({ type: "endDate", payload: e["1"] });
  }
  return (
    <>
      <GrayCont>
        <Row onClick={() => setIsopen(true)} style={{ cursor: "pointer" }}>
          Please click to select the range of your staying date
          <Icon>
            <FaRegCalendarAlt size={25} />
          </Icon>{" "}
        </Row>
      </GrayCont>
      {isOpen ? (
        <ClaendarContainer>
          <IoCloseCircleOutline
            size={20}
            onClick={() => setIsopen(false)}
            style={{ cursor: "pointer" }}
          />

          <StyledCalendar>
            <Calendar
              onChange={(e) => {
                handleSelect(e);
              }}
              calendarType="iso8601"
              selectRange={true}
              returnValue="range"
              minDate={new Date()}
              tileDisabled={tileDisabled}
            />
          </StyledCalendar>
        </ClaendarContainer>
      ) : (
        <>
          <Row>
            <MiniColumn>
              <SubTitle>
                Check-in
                <Icon>
                  <FaArrowCircleDown />
                </Icon>
              </SubTitle>

              <Container>{startDate}</Container>
            </MiniColumn>
            <MiniColumn>
              <SubTitle>
                Check-out
                <Icon>
                  <FaArrowCircleUp />
                </Icon>
              </SubTitle>
              <Container>{endDate}</Container>
            </MiniColumn>
          </Row>
        </>
      )}
    </>
  );
}

export default DateCalendar;
