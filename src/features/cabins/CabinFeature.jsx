import styled from "styled-components";
const StyledFeature = styled.div`
  display: flex;
  gap: 1rem;
  font-weight: 600;
`;
const FeatureIcon = styled.div`
  margin-top: 2px;
`;
function Feature({ children, icon }) {
  return (
    <StyledFeature>
      <FeatureIcon>{icon}</FeatureIcon>
      {children}{" "}
    </StyledFeature>
  );
}

export default Feature;
