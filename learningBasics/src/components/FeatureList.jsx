import PropTypes from "prop-types";
import styled from "styled-components";

const ListWrapper = styled.ul`
  background: #f7f7f7;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  list-style: none;
  margin: 0;
`;

const FeatureItem = styled.li`
  font-size: 1rem;
  color: #333;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:last-child {
    border-bottom: none;
  }
`;

const Icon = styled.span`
  font-size: 1.2rem;
  color: #1976d2;
`;

export default function FeatureList({ features }) {
  return (
    <ListWrapper>
      {features.map((feature, idx) => (
        <FeatureItem key={idx}>
          <Icon>✔️</Icon>
          {feature}
        </FeatureItem>
      ))}
    </ListWrapper>
  );
}

FeatureList.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};
