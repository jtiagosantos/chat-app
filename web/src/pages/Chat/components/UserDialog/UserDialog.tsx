import { X } from 'phosphor-react';

//hooks
import { useUserDialog } from '@/hooks/useUserDialog';

//styles
import * as S from './styles';
import { theme } from '@/styles/theme';

export const UserDialog = () => {
  const { user, onCloseDialog, isOpenDialog } = useUserDialog();

  const { name, profileImage } = user;

  if (isOpenDialog) {
    return (
      <S.Container>
        <S.Wrapper>
          <X 
            size={20} 
            weight='bold' 
            color={theme.colors.white}
            onClick={onCloseDialog} 
          />
        </S.Wrapper>
        <S.ProfileImageWrapper>
          <S.ProfileImage src={profileImage} alt={name} />
        </S.ProfileImageWrapper>
        <S.Name>{name}</S.Name>
      </S.Container>
    );
  }

  return null;
}