import styled from "styled-components";

const Banner = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background: #ffe066;
  color: #222;
  font-size: 1.1rem;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  margin-bottom: 1rem;
`;

export default function NotificationBanner({ message }) {
  return <Banner>{message}</Banner>;
}
