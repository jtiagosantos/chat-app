import { X } from 'phosphor-react';
import { useTransition } from 'react-spring';

//hooks
import { useUserDialogDispatch, useUserDialogState } from '@/hooks';

//styles
import * as S from './styles';
import { theme } from '@/styles/theme';

export const UserDialog = () => {
  const { user, isOpenedDialog } = useUserDialogState();
  const { closeDialog } = useUserDialogDispatch();

  const { name, profileImage } = user;

  const dialogTransition = useTransition(isOpenedDialog, {
    from: { x: -50, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: -50, y: 0, opacity: 0 },
  });

  return (
    <>
      {dialogTransition((style, item) => (
        item && (
          <S.Container style={style}>
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
        )
      ))}
    </>
  );
}