import { useEffect } from "react";
import AboutFeatures from "../ui/AboutFeatures";
import styled from "styled-components";
import SectionImageHeader from "../ui/SectionImageHeader";

const AboutText = styled.p`
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: black;
  font-weight: 500;
  font-size: 2rem;
  margin: 4rem;
`;
function About() {
  useEffect(() => {
    document.title = "Blessedness Gardens: About";
    return function () {
      document.title = "Blessedness Gardens";
    };
  }, []);

  return (
    <>
      <SectionImageHeader title={"About us"} image={"/hui.jpg"} />
      <AboutText>
        Nestled in the picturesque Bavarian countryside, Blessedness Gardens
        offers a serene escape from the hustle and bustle of everyday life. Our
        charming cabins are the perfect retreat for travelers seeking a peaceful
        and rejuvenating getaway. Surrounded by lush gardens and breathtaking
        views, our property is a true sanctuary for nature lovers and outdoor
        enthusiasts. With cozy accommodations and modern amenities, guests can
        unwind and relax in comfort. Whether you're looking to explore the
        nearby scenic trails, visit local attractions, or simply unwind with a
        book on your private terrace, Blessedness Gardens promises a truly
        magical experience. Escape to Blessedness Gardens and discover the
        beauty and tranquility of Bavaria in our one-of-a-kind cabins. Your
        unforgettable adventure awaits.
      </AboutText>
      <AboutFeatures />
    </>
  );
}

export default About;
