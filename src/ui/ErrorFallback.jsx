import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import HeroBtn from "./HeroBtn";

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 3.2rem;
    /* color: var(--color-grey-500); */
  }
`;
const Heading = styled.p`
  font-size: 3rem;
  font-weight: 600;
`;
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Box>
          <Heading as="h1">
            We are sorry! Something went wrong, we will fix it soon. Thank You
          </Heading>
          <HeroBtn btn_bg={"normal"} onClick={resetErrorBoundary}>
            <p style={{ color: "white", margin: "1rem" }}>Try again</p>
          </HeroBtn>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;
