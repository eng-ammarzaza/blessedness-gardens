import { IconContext } from "react-icons";
import { HiEye, HiMiniUsers } from "react-icons/hi2";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  margin: 1rem;
  background-image: ${(props) => `url(${props.cabin_img})`};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 28rem;
  width: 40rem;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  border-radius: 10px;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media screen and (max-width: 435px) {
    height: 23rem;
    width: 35rem;
  }
`;
const DiscountCont = styled.div`
  margin: 1rem;
  align-self: end;
  font-size: small;
  border-radius: 50px;
  background: #ccd5ae;
  color: black;
  padding: 2%;
`;
const DetailsCont = styled.div`
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #fefae0;
  /* background-color: var(--color-brand-200); */
  height: 7rem;
  border-radius: 25px 25px 8px 8px;
  @media screen and (max-width: 435px) {
    height: 5rem;
    font-size: 12px;
  }
`;
const DescCont = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FakeDis = styled.div`
  background: transparent;
`;
const DetailsBtn = styled.button`
  background-color: var(--color-brand-700);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 8px;
  font-size: 1.4rem;
  margin-bottom: 1.7rem;
  /* cursor: pointer; */
  @media screen and (max-width: 435px) {
    font-size: 0.8rem;
    padding: 4px;
  }
`;
function CabinMiniCard({ cabin }) {
  const { id, image, name, maxCapacity, regularPrice, discount } =
    cabin === undefined ? {} : cabin;
  const navigate = useNavigate();
  return (
    <Container cabin_img={image}>
      {discount > 0 ? (
        <DiscountCont>{discount}€ Discount</DiscountCont>
      ) : (
        <FakeDis />
      )}
      <DetailsCont>
        <p>Cabin {name}</p>
        <DescCont>
          <span>
            <IconContext.Provider
              value={{ style: { verticalAlign: "middle" }, size: 20 }}
            >
              <span>
                <HiMiniUsers />
              </span>
            </IconContext.Provider>{" "}
            up to {maxCapacity}
          </span>
          <div>
            <span>{formatCurrency(regularPrice)} /night</span>
          </div>
          <DetailsBtn onClick={() => navigate(`/cabins/${id}`)}>
            <IconContext.Provider
              value={{ style: { verticalAlign: "middle" } }}
            >
              <span>
                <HiEye />
              </span>
            </IconContext.Provider>{" "}
            Show details
          </DetailsBtn>
        </DescCont>
      </DetailsCont>
    </Container>
  );
}

export default CabinMiniCard;
