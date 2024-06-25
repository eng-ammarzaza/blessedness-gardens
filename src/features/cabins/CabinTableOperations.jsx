import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import styled from "styled-components";

const StyledText = styled.p`
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 600;
  border-bottom: 2px solid var(--color-brand-700);
  margin-bottom: 1rem;
`;

function CabinTableOperations() {
  return (
    <TableOperations>
      <div>
        <StyledText>Filter by:</StyledText>

        <Filter
          filterField="discount"
          options={[
            { value: "all", label: "All" },
            { value: "yes", label: "Discount" },
            { value: "no", label: "No Discount" },
          ]}
        />
      </div>
      <div>
        <StyledText>Sort by:</StyledText>

        <SortBy
          options={[
            { value: "name-asc", label: "Sort by Name (A-Z)" },
            { value: "name-desc", label: "Sort by Name (Z-A)" },
            { value: "regularPrice-asc", label: "Sort by Price (low first)" },
            { value: "regularPrice-desc", label: "Sort by Price (high first)" },
            {
              value: "maxCapacity-asc",
              label: "Sort by Max Capacity (low first)",
            },
            {
              value: "maxCapacity-desc",
              label: "Sort by Max Capacity (high first)",
            },
          ]}
        />
      </div>
    </TableOperations>
  );
}

export default CabinTableOperations;
