// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { BiTrip } from "react-icons/bi";
import { FaInfo } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import NavbarLinks from "./NavbarLinks";
const back = {
  normal: css`
    color: white;
    background-color: var(--color-brand-900);
  `,
  trans: css`
    background: transparent;
    /* background: linear-gradient(#344e41, rgb(0 0 0 / 0%), rgb(0 0 0 / 0%)); */
  `,
};
const textcolor = {
  normal: css`
    color: white;
  `,
  trans: css`
    color: var(--color-brand-900);
  `,
};
const Header = styled.div`
  height: 8rem;
  display: grid;
  grid-template-columns: 45% 55%;
  width: 100%;
  position: absolute;
  ${(props) => back[props.back]};
  @media screen and (max-width: 430px) {
    height: 5.5rem;
    grid-template-columns: 40% 60%;
  }
`;
Header.defaultProps = {
  back: "normal",
};
const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeaderText = styled.div`
  font-family: "Noto Sans HK", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 2rem;
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  ${(props) => textcolor[props.textcolor]}
  @media screen and (max-width: 430px) {
    margin-top: 0.5rem;
  }
`;

const StyledLogo = styled.img`
  width: 12rem;
  height: 8rem;

  /* for mobiles */
  @media screen and (max-width: 430px) {
    width: 8rem;
    height: 5rem;
  }
`;
const MenuToggle = styled.div`
  display: none;

  @media (max-width: 650px) {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
    /* align-self: center; */
    margin: 1.5rem 2rem 0;
  }
`;
const Menu = styled.ul`
  display: flex;
  gap: inherit;
  @media (max-width: 650px) {
    display: ${({ isopen }) => (isopen === "true" ? `flex` : `none`)};
    flex-direction: column !important;
    background: rgba(255, 255, 255, 0.3);
    padding: 0 1.5rem;
  }
`;
const TextSubHeader = styled.div`
  margin-top: 2.5rem;
  @media (max-width: 815px) {
    display: none;
  }
`;
function Navbar() {
  const [navBg, setNavBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 150 ? setNavBg(true) : setNavBg(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header back={navBg ? "normal" : "trans"}>
      <div></div>
      <SubHeader>
        <Link to={"/home"}>
          <StyledLogo
            src={navBg ? "/logo-light.png" : "/logo-dark.png"}
            alt="blessedness gardes logo"
            style={{ alignSelf: "center" }}
          />
        </Link>

        {navBg ? (
          <TextSubHeader>
            <NavbarLinks />
          </TextSubHeader>
        ) : (
          <div>
            <MenuToggle onClick={toggleMenu}>
              <TiThMenu size={25} color={navBg ? "white" : "#1f3818"} />
            </MenuToggle>
            <HeaderText
              textcolor={navBg ? "normal" : "trans"}
              style={{ gap: "4rem" }}
            >
              <Menu isopen={isOpen.toString()}>
                <Link to="/contact">
                  <SiMinutemailer size={30} title={"contact"} />
                </Link>
                <Link to="/around">
                  <BiTrip size={30} title={"around"} />
                </Link>
                <Link to="/about">
                  <FaInfo size={30} title={"about"} />
                </Link>
                <div></div>
              </Menu>
            </HeaderText>
          </div>
        )}
      </SubHeader>
    </Header>
  );
}

export default Navbar;
