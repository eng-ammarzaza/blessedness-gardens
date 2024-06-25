import styled from "styled-components";
const StyledTitle = styled.div`
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  @media screen and (max-width: 430px) {
    font-size: 1.5rem;
  }
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 0.6rem;
  @media screen and (max-width: 430px) {
    width: 15px;
    height: 15px;
  }
`;
const Container = styled.div`
  margin: 2rem 2rem;
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 430px) {
    margin: 3rem 2rem;
  }
`;
function HomeSecTitle({ children }) {
  return (
    <div className="homemarg">
      <Container>
        <Icon src="/juo.png" />
        <StyledTitle>{children}</StyledTitle>
      </Container>
    </div>
  );
}

export default HomeSecTitle;
