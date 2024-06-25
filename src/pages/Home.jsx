import Hero from "../ui/Hero";
import CabinsHomePage from "../features/cabins/CabinsHomePage";
import AboutFeatures from "../ui/AboutFeatures";
import MultiLayerParallax from "../ui/MultiLayerParallax";
import SocialAccordion from "../features/accordion/SocialAccordion";
import HomeSecTitle from "../ui/HomeSecTitle";

function Home() {
  return (
    <>
      <Hero />
      <CabinsHomePage />
      <MultiLayerParallax />
      <HomeSecTitle>
        See & share bless moments!
        <p> Use #blessgardens or tag @blsgardens to be featured.</p>
      </HomeSecTitle>
      <SocialAccordion />
      <HomeSecTitle>Why choose us?</HomeSecTitle>
      <AboutFeatures />
    </>
  );
}

export default Home;
