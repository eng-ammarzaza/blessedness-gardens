import { useReadCabins } from "./useReadCabins";
import Spinner from "../../ui/Spinner";
import CabinMiniCard from "./CabinMiniCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeSecTitle from "../../ui/HomeSecTitle";

const StyledCabinsHomePage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 3rem;
`;
const MoreBtn = styled.div`
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 600;
  margin: 3rem 2rem 0 0;
  background-color: var(--color-brand-100);
  padding: 1rem;
  border-radius: 5px;
  &:hover {
    background-color: var(--color-brand-200);
    letter-spacing: 3px;
    transition: letter-spacing 0.6s ease;
    font-weight: 700;
  }
  @media screen and (max-width: 430px) {
    padding: 0.5rem;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
function CabinsHomePage() {
  const { isLoading, cabins } = useReadCabins();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Row>
        <HomeSecTitle>Our Cabins</HomeSecTitle>
        <Link to="/cabins">
          <MoreBtn>See all cabins</MoreBtn>
        </Link>{" "}
      </Row>
      <StyledCabinsHomePage>
        {cabins?.slice(0, 6).map((cabin) => (
          <CabinMiniCard key={cabin.id} cabin={cabin} />
        ))}
      </StyledCabinsHomePage>
    </>
  );
}

export default CabinsHomePage;
