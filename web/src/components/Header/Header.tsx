import { PencilSimple, SignOut } from 'phosphor-react';

//styles
import { theme } from '@/styles/theme';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <S.Profile>
        <img src='https://pbs.twimg.com/profile_images/1058706213129474048/0Z-kRgbx_400x400.jpg' alt='' />
        <h1>bot-42</h1>
        <PencilSimple size={18} color={theme.colors.white} weight='light' />
      </S.Profile>
      <div>
        <SignOut size={22} color={theme.colors.white} weight='bold' />
      </div>
    </S.Container>
  );
}