import styled from "styled-components";

const TagStyled = styled.span`
  display: inline-block;
  background: #f1f1f1;
  color: #333;
  border-radius: 12px;
  padding: 0.3rem 0.8rem;
  font-size: 0.95rem;
  margin: 0.2rem;
`;

export default function Tag({ children }) {
  return <TagStyled>{children}</TagStyled>;
}
