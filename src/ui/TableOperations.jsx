import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  flex-direction: column;
  position: "fixed";
  margin-left: 2rem;
  gap: 5rem;
  @media screen and (max-width: 1050px) {
    flex-direction: row;
    margin-left: 0rem;
    gap: 2rem;
  }
`;

export default TableOperations;
