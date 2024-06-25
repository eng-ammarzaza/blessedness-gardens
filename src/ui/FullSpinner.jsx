import styled from "styled-components";
import Spinner from "./Spinner";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;
function FullSpinner() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}

export default FullSpinner;
