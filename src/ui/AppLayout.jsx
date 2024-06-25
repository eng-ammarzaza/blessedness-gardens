import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarHome from "./NavbarHome";
import { Outlet, useLocation } from "react-router-dom";

const Container = styled.div`
  display: grid;
  /* grid-row-start: 1; */
  grid-template-rows: auto 1fr auto;
`;
const StickyHead = styled.div`
  position: sticky;
  top: 0;
  z-index: 15;
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  overflow: hidden;
`;

function AppLayout() {
  const location = useLocation();
  return (
    <Container>
      {location.pathname === "/home" ? (
        <StickyHead>
          <NavbarHome />
        </StickyHead>
      ) : (
        <Navbar />
      )}

      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  );
}

export default AppLayout;
