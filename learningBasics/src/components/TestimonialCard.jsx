import styled from "styled-components";

const TestimonialWrapper = styled.div`
  width: 340px;
  background: #f4f8fb;
  border-radius: 14px;
  box-shadow: 0 2px 14px rgba(0,0,0,0.09);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quote = styled.p`
  font-size: 1.1rem;
  color: #333;
  font-style: italic;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Author = styled.div`
  font-size: 1rem;
  color: #0077ff;
  font-weight: bold;
`;

export default function TestimonialCard({ quote, author }) {
  return (
    <TestimonialWrapper>
      <Quote>"{quote}"</Quote>
      <Author>- {author}</Author>
    </TestimonialWrapper>
  );
}
