import { FC } from 'react';

//styles
import { Container } from './styles';

interface ProfileBarProps {
  username: string;
  profilePhotoURL: string;
}

export const ProfileBar: FC<ProfileBarProps> = ({ 
  username, 
  profilePhotoURL 
}) => {
  return (
    <Container>
      <img src={profilePhotoURL} alt={username} />
      <h2>{username}</h2>
    </Container>
  );
}