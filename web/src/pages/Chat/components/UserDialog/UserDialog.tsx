import { X } from 'phosphor-react';

//hooks
import { useUserDialogState, useUserDialogDispatch } from '@/hooks/userDialog';

//styles
import * as S from './styles';
import { theme } from '@/styles/theme';

export const UserDialog = () => {
  const { user, isOpenedDialog } = useUserDialogState();
  const { closeDialog } = useUserDialogDispatch();

  const { name, profileImage } = user;

  if (isOpenedDialog) {
    return (
      <S.Container>
        <S.Wrapper>
          <X 
            size={20} 
            weight='bold' 
            color={theme.colors.white}
            onClick={closeDialog} 
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