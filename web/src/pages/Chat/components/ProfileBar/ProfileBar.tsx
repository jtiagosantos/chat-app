import { FC } from 'react';

//styles
import { Container } from './styles';

interface ProfileBarProps {
  username: string;
  profilePhotoURL: string;
  quantityUsersOnline: number;
}

export const ProfileBar: FC<ProfileBarProps> = ({ 
  username, 
  profilePhotoURL,
  quantityUsersOnline
}) => {
  return (
    <Container>
      <div>
        <img src={profilePhotoURL} alt={username} />
        <h2>{username}</h2>
      </div>
      <div>
        <span />
        <h2>{quantityUsersOnline}{' online'}</h2>
      </div>
    </Container>
  );
}