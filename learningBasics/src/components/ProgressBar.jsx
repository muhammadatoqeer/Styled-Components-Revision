import styled from "styled-components";

const BarWrapper = styled.div`
  width: 100%;
  background: #eee;
  border-radius: 8px;
  height: 18px;
  margin: 1rem 0;
`;

const Bar = styled.div`
  height: 100%;
  background: #1976d2;
  border-radius: 8px;
  width: ${({ value }) => value + "%"};
  transition: width 0.4s;
`;

export default function ProgressBar({ value }) {
  return (
    <BarWrapper>
      <Bar value={value} />
    </BarWrapper>
  );
}
