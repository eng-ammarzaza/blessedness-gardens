import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import "../styles/fonts.css";
import HeroBtn from "./HeroBtn";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Container = styled.div`
  width: 100%;
  height: 75vh;
  display: grid;
  margin: 2rem 0;
  position: relative;
`;
const StyledButton = styled.div`
  z-index: 14;
  font-size: 2rem;
  align-self: start;
  margin: 0 12rem 0;
  color: white;
  /* for mobiles */
  @media screen and (max-width: 435px) {
    font-weight: 300;
    font-size: 3rem;
    color: black;
  }
  /* For Tablets */
  @media (min-width: 820px) and (max-width: 825px) {
    font-size: 6rem;
  }
`;
const StyledText = styled.p`
  font-family: "Caveat";
  font-weight: 300;
  font-style: normal;
  font-size: 6rem;
  color: white;
  /* for mobiles */
  @media screen and (max-width: 435px) {
    font-weight: 300;
    font-size: 15px;
  }
  /* For Tablets */
  @media (min-width: 820px) and (max-width: 825px) {
    font-size: 6rem;
  }
`;

function MultiLayerParallax() {
  const navigate = useNavigate();
  const ref = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile",
    });
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "1%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "75%"]);

  return (
    <Container ref={ref}>
      <motion.div
        style={{
          y: textY,
          margin: "0rem 14rem 4rem 11rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        <StyledText
          data-aos="fade-right"
          data-aos-delay={1000}
          data-aos-duration={3000}
        >
          Experience the thrill of cruising along this breathtaking road,
          surrounded by majestic mountains and awe-inspiring landscapes.{" "}
        </StyledText>
      </motion.div>

      <motion.div
        style={{
          backgroundImage: `url("/kokol.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          zIndex: "0",
          inset: "0",
          position: "absolute",
          y: backgroundY,
        }}
      ></motion.div>

      <StyledButton>
        <HeroBtn btn_bg={"trans"} onClick={() => navigate("/around")}>
          Discover what's around!
        </HeroBtn>
      </StyledButton>

      <div
        style={{
          backgroundImage: `url("/parallaxoo.png")`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          zIndex: "13",
          inset: "0",
          position: "absolute",
        }}
      ></div>
    </Container>
  );
}
export default MultiLayerParallax;
