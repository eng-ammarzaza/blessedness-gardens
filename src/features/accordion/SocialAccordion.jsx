import { useState } from "react";
import "./styles.css";
import { FaInstagram } from "react-icons/fa";
import { useReadSocial } from "./useReadSocial";
import Spinner from "../../ui/Spinner";
function SocialAccordion() {
  const [active, setActive] = useState(0);
  const { isLoading, social } = useReadSocial();
  const handleToggle = (index) => setActive(index);
  if (isLoading) return <Spinner />;
  return (
    <div className="kk">
      <section>
        {social.map((social, index) => {
          const isActive = active === index ? "active" : "";
          return (
            <article
              key={social.image}
              className={isActive}
              onClick={() => handleToggle(index)}
            >
              <img src={social.image} alt={"jj"} />
              <div className="content">
                <span className="material-symbols-outlined">
                  <FaInstagram />
                </span>
                <div>
                  <h2>{social.user_name}</h2>
                  <p>#blessgardens</p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default SocialAccordion;
