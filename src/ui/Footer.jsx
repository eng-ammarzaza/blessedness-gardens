import { GoArrowDownRight } from "react-icons/go";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 890px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #023047;
  color: white;
`;
const StyledLogo = styled.img`
  width: 25rem;
  height: 16rem;
  margin: 3rem 0;
`;
const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem 0;
`;
const StyledTitle = styled.p`
  border-bottom: solid 2px;
  text-transform: uppercase;
  display: flex;
  gap: 4rem;
`;
const StyledText = styled.p`
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;
const Rights = styled.div`
  border-top: 1px solid;
  padding-top: 2rem;
  margin: 0 2rem 1.5rem;
  align-self: center;
`;
function Footer() {
  return (
    <Column>
      <StyledContainer className="homemarg">
        <Link to="/">
          <StyledLogo src="/logo-light.png" />
        </Link>

        <StyledColumn>
          <StyledTitle>
            Who we are <GoArrowDownRight />
          </StyledTitle>
          <Link to="/about">
            <StyledText>About</StyledText>
          </Link>
          <Link to="/contact">
            <StyledText>Contact</StyledText>
          </Link>
          <Link to="/cabins">
            <StyledText>Cabins</StyledText>
          </Link>
        </StyledColumn>

        <StyledColumn>
          <StyledTitle>
            things to do <GoArrowDownRight />
          </StyledTitle>
          <Link to="/around">
            <StyledText>Restaurants </StyledText>
          </Link>
          <Link to="/around">
            <StyledText>Walking Mountain</StyledText>
          </Link>
          <Link to="/around">
            <StyledText>Golf</StyledText>
          </Link>
          <Link to="/around">
            <StyledText>Health & Wellness</StyledText>
          </Link>
        </StyledColumn>

        <StyledColumn>
          <StyledTitle>
            places to go <GoArrowDownRight />
          </StyledTitle>
          <p>Neuschwanstein Castle</p>
          <p>Rothenburg Town</p>
          <p>Oktoberfest</p>
          <p>Bavarian Alps</p>
        </StyledColumn>

        <StyledColumn>
          <StyledTitle>
            help <GoArrowDownRight />
          </StyledTitle>
          <StyledText>FAQs</StyledText>
          <StyledText>Term of use</StyledText>
          <StyledText>Our Policy</StyledText>
          <StyledText>Cookies</StyledText>
        </StyledColumn>
      </StyledContainer>
      <Rights>
        Copyrights &copy; {new Date().getFullYear()} Blessedness Gardens all
        rights reserved.
      </Rights>
    </Column>
  );
}

export default Footer;
