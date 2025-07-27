import styled from "styled-components";

const Alert = styled.div`
  padding: 1rem 2rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-size: 1rem;
  color: #fff;
  background: ${({ type }) =>
    type === "success" ? "#4caf50" :
    type === "error" ? "#f44336" :
    type === "warning" ? "#ff9800" : "#2196f3"};
`;

export default function AlertBox({ type = "info", children }) {
  return <Alert type={type}>{children}</Alert>;
}
