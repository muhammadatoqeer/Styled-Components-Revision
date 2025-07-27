import styled from "styled-components";

const ProductCardWrapper = styled.div`
  width: 300px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  color: #222;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.span`
  font-size: 1.1rem;
  color: #0077ff;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ProductDesc = styled.p`
  font-size: 0.95rem;
  color: #555;
  text-align: center;
  margin-bottom: 1rem;
`;

export default function ProductCard({ image, title, price, desc }) {
  return (
    <ProductCardWrapper>
      <ProductImage src={image} alt={title} />
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>{price}</ProductPrice>
      <ProductDesc>{desc}</ProductDesc>
    </ProductCardWrapper>
  );
}
