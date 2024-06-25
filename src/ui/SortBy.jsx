import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(e) {
    searchParams.set("sort-by", e.target.value);
    setSearchParams(searchParams);
  }
  const sortBy = searchParams.get("sort-by") || "";
  return (
    <Select
      value={sortBy}
      options={options}
      type="white"
      onChange={handleChange}
    />
  );
}

export default SortBy;
