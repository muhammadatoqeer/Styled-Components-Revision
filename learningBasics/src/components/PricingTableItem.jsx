import styled from "styled-components";

const PricingItem = styled.div`
  width: 260px;
  background: #fff;
  border: 2px solid #0077ff;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
`;

const PlanName = styled.h4`
  font-size: 1.2rem;
  color: #0077ff;
  margin-bottom: 0.5rem;
`;

const Price = styled.div`
  font-size: 2rem;
  color: #222;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
`;

const Feature = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.25rem;
`;

export default function PricingTableItem({ plan, price, features }) {
  return (
    <PricingItem>
      <PlanName>{plan}</PlanName>
      <Price>{price}</Price>
      <Features>
        {features.map((f, i) => (
          <Feature key={i}>{f}</Feature>
        ))}
      </Features>
    </PricingItem>
  );
}
