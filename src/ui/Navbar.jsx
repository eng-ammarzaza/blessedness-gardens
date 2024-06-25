import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavbarLinks from "./NavbarLinks";
import { TiThMenu } from "react-icons/ti";

const Navba = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-brand-900);
  color: #fff;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Logo = styled.div`
  flex: 1;
  text-align: center;
  margin-left: 20%;
  @media (max-width: 768px) {
    margin-left: 10%;
  }
`;
const StyledLogo = styled.img`
  width: 12rem;
  height: 8rem;
  @media screen and (max-width: 430px) {
    width: 8rem;
    height: 5rem;
  }
`;
const MenuToggle = styled.div`
  display: none;
  color: white;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 1.5rem 2rem 0;
  }
`;
const BigNavlinks = styled.div`
  /* visibility:none  */
  @media (max-width: 769px) {
    display: none;
  }
`;
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <>
      <Navba>
        <Logo>
          <StyledLogo
            src={"/logo-light.png"}
            alt="blessedness gardes logo"
            onClick={() => navigate("/")}
          />
        </Logo>
        <BigNavlinks>
          <NavbarLinks />
        </BigNavlinks>
        <MenuToggle onClick={toggleMenu}>
          <TiThMenu size={25} color={"white"} />
        </MenuToggle>
      </Navba>
      {isOpen && (
        <div style={{ display: "block" }}>
          <NavbarLinks />
        </div>
      )}
    </>
  );
}

export default Navbar;
