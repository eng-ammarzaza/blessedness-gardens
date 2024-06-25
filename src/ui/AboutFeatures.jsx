import { FaEnvira, FaUniversalAccess } from "react-icons/fa";
import { MdHealthAndSafety, MdPrivacyTip } from "react-icons/md";
import styled from "styled-components";
import "../styles/fonts.css";
import { IconContext } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  background-color: #fefae0;
`;
const StyledAboutFeatures = styled.div`
  display: flex;
  @media screen and (max-width: 615px) {
    flex-wrap: wrap;
  }
`;
const AboutFeature = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;

  & span {
    font-weight: 800;
    font-size: 2rem;
  }
  & p {
    font-weight: 500;
  }
`;

function AboutFeatures() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile",
    });
  }, []);

  return (
    <Container>
      <div className="homemarg">
        <div></div>
        <StyledAboutFeatures
          data-aos="fade-left"
          data-aos-delay={1000}
          data-aos-duration={4000}
          data-aos-offset="0"
        >
          <AboutFeature>
            <div>
              <IconContext.Provider
                value={{ style: { verticalAlign: "middle" }, size: 30 }}
              >
                <span>
                  <FaEnvira />
                </span>
              </IconContext.Provider>{" "}
              <span>Sustainability</span>
            </div>
            <p>
              Sustainable hotel with energy-efficient lighting and local,
              organic menu items.
            </p>
          </AboutFeature>

          <AboutFeature>
            <div>
              <IconContext.Provider
                value={{ style: { verticalAlign: "middle" }, size: 30 }}
              >
                <span>
                  <MdHealthAndSafety />
                </span>
              </IconContext.Provider>{" "}
              <span>Health Conditions</span>
            </div>
            <p>
              Strict cleaning, sanitize high-touch areas, safe environment for
              guests.
            </p>
          </AboutFeature>

          <AboutFeature>
            <div>
              <IconContext.Provider
                value={{ style: { verticalAlign: "middle" }, size: 30 }}
              >
                <span>
                  <FaUniversalAccess />
                </span>
              </IconContext.Provider>{" "}
              <span>Accessibility</span>
            </div>
            <p>
              Accessible entrances, ADA rooms, trained staff for disabled
              guests' comfort.
            </p>
          </AboutFeature>

          <AboutFeature>
            <div>
              <IconContext.Provider
                value={{ style: { verticalAlign: "middle" }, size: 30 }}
              >
                <span>
                  <MdPrivacyTip />
                </span>
              </IconContext.Provider>{" "}
              <span>Guests' privacy</span>
            </div>
            <p>
              Guest privacy top priority, personal info confidential and secure.
            </p>
          </AboutFeature>
        </StyledAboutFeatures>
      </div>
    </Container>
  );
}

export default AboutFeatures;
