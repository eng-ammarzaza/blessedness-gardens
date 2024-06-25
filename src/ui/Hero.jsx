import styled from "styled-components";
import HeroBtn from "./HeroBtn";
import "../styles/fonts.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useHero } from "../services/useHero";
import SpinnerMini from "../ui/SpinnerMini";
const StyledHero = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
`;

const HeroText = styled.div`
  top: 25rem;
  position: absolute;
  z-index: 10;
  text-align: center;
  color: white;
  & p {
    font-family: "Lugrasimo", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 4rem;
    margin: 1rem 5rem 3rem;
    /* for mobiles */
    @media screen and (max-width: 435px) {
      font-weight: 300;
      margin: -0.5rem 3rem 3rem 3rem;
      font-size: 12px;
    }
    /* For Tablets */
    @media (min-width: 820px) and (max-width: 912px) {
      font-size: 2rem;
    }
  }
  /* for mobiles */
  @media screen and (max-width: 435px) {
    top: 8rem;
  }
  /* For Tablets */
  @media (min-width: 820px) and (max-width: 825px) {
    top: 15rem;
  }
`;
const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
`;
function Hero() {
  const { isLoading, video } = useHero();

  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  if (isLoading) return <SpinnerMini />;

  return (
    <StyledHero>
      <Video loop muted autoPlay>
        {/* <source src="/herovid.mp4" type="video/mp4" /> */}
        <source src={video[0].media} type="video/mp4" />
        Your browser doesn't support videos
      </Video>

      <HeroText
        data-aos="zoom-in"
        data-aos-delay={3000}
        data-aos-duration={2000}
      >
        <p className="homemarg">
          Immerse yourself in the beauty of our garden's infinite charm as you
          discover one of Europe's hidden gems!
        </p>
        <div></div>
        <HeroButtons>
          <HeroBtn btn_bg={"trans"} onClick={() => navigate("/about")}>
            Who we are
          </HeroBtn>
          <HeroBtn btn_bg={"normal"} onClick={() => navigate("/cabins")}>
            See Cabins
          </HeroBtn>
        </HeroButtons>
      </HeroText>
    </StyledHero>
  );
}

export default Hero;
