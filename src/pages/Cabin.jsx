import { useEffect } from "react";
import CabinDetails from "../features/cabins/CabinDetails";
import { useReadCabin } from "../features/cabins/useReadCabin";

function Cabin() {
  const { cabin } = useReadCabin();
  useEffect(() => {
    document.title = `Blessedness Gardes: Cabin ${cabin?.name}`;
    return function () {
      document.title = "Blessedness Gardes";
    };
  }, [cabin?.name]);
  return (
    <div>
      <CabinDetails />
    </div>
  );
}

export default Cabin;
