import styled, { css } from "styled-components";

const btn_bg = {
  primary: css`
    background-color: var(--color-brand-700);
    color: white;
    border-color: var(--color-brand-700);
  `,
  secondary: css`
    background-color: white;
    border-color: black;
    color: black;
    &:hover {
      background-color: var(--color-brand-700);
      border-color: var(--color-brand-700);
      color: white;
    }
  `,
};
const ModalBtn = styled.button`
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  border: solid 1px;
  border-radius: 20px;
  padding: 1rem 0.5rem;
  width: 15rem;
  ${(props) => btn_bg[props.btn_bg]};
`;

ModalBtn.defaultProps = {
  btn_bg: "primary",
};

export default ModalBtn;
