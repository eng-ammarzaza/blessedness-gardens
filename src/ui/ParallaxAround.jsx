import { Parallax } from "react-parallax";
import styled from "styled-components";
const DescriptionCont = styled.div`
  height: 95vh;
`;
const Description = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 20px 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.65);
  color: white;
  width: 100%;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 2.25rem;
  /* for mobiles */
  @media screen and (max-width: 430px) {
    font-size: 1.5rem;
  }
`;
function ParallaxAround({ image, children }) {
  return (
    <>
      <Parallax
        strength={400}
        bgImage={image}
        bgImageStyle={{ height: "100vh", width: "100vw" }}
      >
        <DescriptionCont>
          <Description>{children}</Description>
        </DescriptionCont>
      </Parallax>
    </>
  );
}

export default ParallaxAround;
