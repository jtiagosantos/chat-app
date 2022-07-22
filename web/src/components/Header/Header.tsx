import { FC } from 'react';
import { PencilSimple, SignOut } from 'phosphor-react';

//types
import { HeaderProps } from './types';

//styles
import { theme } from '@/styles/theme';
import * as S from './styles';

export const Header: FC<HeaderProps> = ({ profileImage, username, onlineUsersNumber }) => {
  return (
    <S.Container>
      <S.Profile>
        <img src={profileImage} alt='' />
        <h1>{username}</h1>
        <PencilSimple size={18} color={theme.colors.white} weight='regular' />
      </S.Profile>
      <S.Wrapper>
        {!!onlineUsersNumber && (
          <S.Online>
            <span />
            <h2>{onlineUsersNumber}{' online'}</h2>
          </S.Online>
        )}
        <SignOut size={22} color={theme.colors.white} weight='bold' />
      </S.Wrapper>
    </S.Container>
  );
}