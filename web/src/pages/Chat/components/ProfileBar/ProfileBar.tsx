import { FC } from 'react';

//types
import { ProfileBarProps } from './types';

//styles
import * as S from './styles';

export const ProfileBar: FC<ProfileBarProps> = ({ 
  username, 
  profilePhotoURL,
  quantityUsersOnline
}) => {
  return (
    <S.Container>
      <S.ProfileDataWrapper>
        <img src={profilePhotoURL} alt={username} />
        <h2>{username}</h2>
      </S.ProfileDataWrapper>
      <S.Online>
        <span />
        <h2>{quantityUsersOnline}{' online'}</h2>
      </S.Online>
    </S.Container>
  );
}