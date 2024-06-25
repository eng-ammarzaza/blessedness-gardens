import styled from "styled-components";
import FullSpinner from "../../ui/FullSpinner";
import { useReadCabin } from "./useReadCabin";
import { FaSpa, FaWifi } from "react-icons/fa";
import { IoBedSharp } from "react-icons/io5";
import { TbBathFilled } from "react-icons/tb";
import { BiSolidDrink } from "react-icons/bi";
import BookSidebar from "../booking/BookSidebar";
import CabinFeature from "./CabinFeature";
const Container = styled.div`
  display: flex;
  margin: 0 2rem;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  /* For Tablets */
  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0 1rem;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 65vw;
  height: 65vh;
  margin: 2rem 2rem 2rem 0;
  border-radius: 2rem;
  @media screen and (max-width: 820px) {
    margin: 2rem auto;
    width: 100%;
    height: 40vh;
  }
`;
const Description = styled.div`
  width: 65vw;
  margin: 2rem 2rem 2rem 0;
  font-weight: 500;
  @media screen and (max-width: 820px) {
    width: 95%;
  }
`;
const Features = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem;
  /* for mobiles */
  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  display: inline-block !important;
  width: auto;
  padding-bottom: 1rem;
  border-bottom: solid 2px var(--color-brand-700);
  width: fit-content;
`;

function CabinDetails() {
  const { cabin, isLoading } = useReadCabin();

  if (isLoading) return <FullSpinner />;
  return (
    <Container>
      <Column>
        <Image src={cabin.image}></Image>
        <h2>Cabin {cabin.name}</h2>
        <Title>Description</Title>
        <Description>{cabin.description}</Description>
        <Title>Cabin's Features </Title>
        <Features>
          <CabinFeature icon={<BiSolidDrink />}>
            Free Welcome Drinks
          </CabinFeature>
          <CabinFeature icon={<FaWifi />}>Free Wi-Fi</CabinFeature>
          <CabinFeature icon={<IoBedSharp />}>Kings Bed</CabinFeature>
          <CabinFeature icon={<TbBathFilled />}>Bathup</CabinFeature>
          <CabinFeature icon={<FaSpa />}>Spa Access</CabinFeature>
        </Features>
      </Column>
      <BookSidebar />
    </Container>
  );
}

export default CabinDetails;
