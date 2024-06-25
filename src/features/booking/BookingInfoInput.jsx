import { FaUserFriends } from "react-icons/fa";
import GrayCont from "../../ui/GrayCont";
import Icon from "../../ui/Icon";
import MiniColumn from "../../ui/MiniColumn";
import SubTitle from "../../ui/SubTitle";
import { MdOutlineAddCircle } from "react-icons/md";
import { useReadSettings } from "./useReadSettings";
import { useBookingInfo } from "../../contexts/BookingInfoContext";
import { useReadCabin } from "../cabins/useReadCabin";
import Checkbox from "../../ui/Checkbox";
import GuestInput from "../../ui/GuestInput";

function BookingInfoInput() {
  const { settings } = useReadSettings();
  const { dispatch, numGuests } = useBookingInfo();
  const { cabin } = useReadCabin();

  function handleExtraFeature(type) {
    switch (type) {
      case "breakfast":
        dispatch({ type: "breakfast", payload: settings?.breakfastPrice });
        break;
      case "extraPillow":
        dispatch({ type: "extraPillow" });
        break;
      case "parking":
        dispatch({ type: "parking", payload: 9 });
        break;
      case "transport":
        dispatch({ type: "transport", payload: 120 });
        break;
      default:
        return;
    }
  }
  function handleNumGuests(number) {
    if (!number) return;
    dispatch({ type: "guests", payload: +number });
  }

  return (
    <>
      <MiniColumn style={{ marginBottom: "2rem" }}>
        <SubTitle>
          Guests up to {cabin.maxCapacity}
          <Icon>
            <FaUserFriends />
          </Icon>
        </SubTitle>
        <GuestInput>
          <input
            type="text"
            min="1"
            max={cabin.maxCapacity}
            placeholder="Enter minimum 1 to continue booking"
            onChange={(e) => {
              if (e.target.value <= cabin.maxCapacity)
                handleNumGuests(Number(e.target.value));
            }}
            disabled={numGuests > 0}
          />
        </GuestInput>
      </MiniColumn>

      <MiniColumn>
        <SubTitle>
          Extra Features
          <Icon>
            <MdOutlineAddCircle />
          </Icon>
        </SubTitle>
        <GrayCont>
          <Checkbox
            reducertype={"breakfast"}
            id={"breakfast"}
            onChange={() => handleExtraFeature("breakfast")}
            cost={settings?.breakfastPrice}
          >
            Breakfast/Person
          </Checkbox>

          <Checkbox
            reducertype={"extraPillow"}
            id={"pillow"}
            onChange={() => handleExtraFeature("extraPillow")}
            cost={0}
          >
            Extra Pillow
          </Checkbox>

          <Checkbox
            reducertype={"parking"}
            id={"parking"}
            onChange={() => handleExtraFeature("parking")}
            cost={9}
          >
            Parking/Day
          </Checkbox>

          <Checkbox
            reducertype={"transport"}
            id={"transport"}
            onChange={() => handleExtraFeature("transport")}
            cost={120}
          >
            Transport from/to Airport
          </Checkbox>
        </GrayCont>
      </MiniColumn>
    </>
  );
}

export default BookingInfoInput;
