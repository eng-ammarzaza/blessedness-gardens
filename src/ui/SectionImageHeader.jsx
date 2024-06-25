import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 50vh;
  position: relative;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  letter-spacing: 2px;
`;
const Title = styled.div`
  background: transparent;
  backdrop-filter: blur(3px);
  height: 10rem;
  width: 40rem;
  border: 1px solid gray;
  border-radius: 8px;
  color: white;
  padding-top: 2rem;
  position: absolute;
  z-index: 10;
  margin: 40vh;
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;
  text-align: center;

  /* for mobiles */
  @media screen and (max-width: 435px) {
    width: 25rem;
    margin: 90% 0 0 10%;
  }
  /* For Tablets */
  @media (min-width: 820px) and (max-width: 825px) {
    width: 30rem;
    margin: 63% 0 0 20%;
  }
`;

function SectionImageHeader({ image, title }) {
  return (
    <Container image={image}>
      <Title>{title}</Title>
    </Container>
  );
}

export default SectionImageHeader;
