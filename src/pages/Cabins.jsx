import styled from "styled-components";
import CabinMiniCard from "../features/cabins/CabinMiniCard";
import { useReadCabins } from "../features/cabins/useReadCabins";
import Spinner from "../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import { useEffect } from "react";
const ContainerA = styled.div`
  display: grid;
  @media screen and (min-width: 803px) {
    grid-template-rows: 8% auto;
  }
  @media screen and (max-width: 802px) {
    grid-template-rows: 5% auto;
  }
  @media screen and (min-width: 1051px) {
    grid-template-columns: 25% auto;
  }
`;
const ContainerB = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* for mobiles */
  @media screen and (max-width: 430px) {
    margin-right: 15%;
  }
`;
const StyledSidebar = styled.div`
  background-color: #fefae0;
  padding: 2rem;
  grid-row: 1 / -1;
`;
const OperatiobContainer = styled.div`
  @media screen and (min-width: 1050px) {
    position: fixed;
  }
`;
function Cabins() {
  useEffect(() => {
    document.title = "Blessedness Gardes: Cabins";
    return function () {
      document.title = "Blessedness Gardes";
    };
  }, []);

  const { isLoading, cabins } = useReadCabins();
  const [searchParamas] = useSearchParams();
  //filter
  const filterValue = searchParamas.get("discount") || "all";
  let filtredCabin;
  if (filterValue === "all") filtredCabin = cabins;
  if (filterValue === "no")
    filtredCabin = cabins?.filter((cabin) => cabin.discount <= 0);
  if (filterValue === "yes")
    filtredCabin = cabins.filter((cabin) => cabin.discount > 0);
  //sort
  const sortBy = searchParamas.get("sort-by") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filtredCabin?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading) return <Spinner />;
  return (
    <ContainerA>
      <StyledSidebar>
        <OperatiobContainer>
          <CabinTableOperations />
        </OperatiobContainer>
      </StyledSidebar>
      <ContainerB>
        {sortedCabins.map((cabin) => (
          <CabinMiniCard key={cabin.id} cabin={cabin} />
        ))}
      </ContainerB>
    </ContainerA>
  );
}

export default Cabins;
