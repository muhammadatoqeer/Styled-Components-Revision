import styled from "styled-components";

const Card = styled.div`
  width: 180px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Value = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1976d2;
`;

const Label = styled.div`
  font-size: 1rem;
  color: #555;
`;

export default function StatsCard({ icon, value, label }) {
  return (
    <Card>
      <Icon>{icon}</Icon>
      <Value>{value}</Value>
      <Label>{label}</Label>
    </Card>
  );
}
