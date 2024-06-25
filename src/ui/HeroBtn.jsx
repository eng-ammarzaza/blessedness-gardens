import styled, { css } from "styled-components";

const btn_bg = {
  trans: css`
    background: transparent;
    border-color: white;
    &:hover {
      background: var(--color-brand-900);
      border-color: var(--color-brand-900);
    }
  `,
  normal: css`
    background: var(--color-brand-900);
    border-color: var(--color-brand-900);
  `,
};
const HeroBtn = styled.button`
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  border: solid 1px;
  border-radius: 50px;
  padding: 1.5rem 4.5rem;
  ${(props) => btn_bg[props.btn_bg]};
  /* for mobiles */
  @media screen and (max-width: 435px) {
    font-weight: 400;
    font-size: 10px;
    padding: 0.5rem 1.5rem;
  }
  /* For Tablets */
  @media (min-width: 820px) and (max-width: 825px) {
    font-weight: 500;
    font-size: 1.5rem;
    padding: 1rem 2.5rem;
  }
`;

HeroBtn.defaultProps = {
  btn_bg: "normal",
};

export default HeroBtn;
