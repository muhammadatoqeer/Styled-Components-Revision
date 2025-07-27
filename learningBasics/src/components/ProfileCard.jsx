import styled from "styled-components";

const Card = styled.div`
  width: 320px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0 0.25rem 0;
  color: #222;
`;

const Bio = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: #0077ff;
  font-size: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: #0055aa;
  }
`;

export default function ProfileCard({ name, bio, avatar, social }) {
  return (
    <Card>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
      <Bio>{bio}</Bio>
      <SocialLinks>
        {social?.map((item, idx) => (
          <SocialIcon key={idx} href={item.url} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </SocialIcon>
        ))}
      </SocialLinks>
    </Card>
  );
}
