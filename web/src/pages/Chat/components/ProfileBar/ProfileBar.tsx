import { FC } from 'react';

//types
import { ProfileBarProps } from './types';

//styles
import { Container } from './styles';

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