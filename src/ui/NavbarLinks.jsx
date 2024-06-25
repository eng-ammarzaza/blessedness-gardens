import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLinks = styled.div`
  font-family: "Noto Sans HK", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 2rem;
  display: flex;
  gap: 2rem;
  background-color: var(--color-brand-900);
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
function NavbarLinks() {
  return (
    <NavLinks>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact us</Link>
      <Link to="/around">Around</Link>
      <div></div>
    </NavLinks>
  );
}

export default NavbarLinks;
