import styled from "styled-components";

const Badge = styled.div`
  display: flex;
  align-items: center;
  background: #e3f2fd;
  color: #1976d2;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  gap: 0.5rem;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export default function UserBadge({ avatar, name }) {
  return (
    <Badge>
      <Avatar src={avatar} alt={name} />
      {name}
    </Badge>
  );
}
