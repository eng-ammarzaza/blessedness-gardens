import styled, { css } from "styled-components";
const kind = {
  contact: css`
    border-bottom: solid 2px var(--color-brand-700);
  `,
};
const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  ${(props) => kind[props.kind]};
`;
export default Input;
