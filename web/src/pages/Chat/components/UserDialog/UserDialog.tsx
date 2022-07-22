import { X } from 'phosphor-react';

//hooks
import { 
  useUserDialogDispatch, 
  useUserDialogState, 
  useTransition 
} from '@/hooks';

//constans
import { USER_DIALOG_ANIMATION_STYLES } from '@/constants';

//styles
import * as S from './styles';
import { theme } from '@/styles/theme';

export const UserDialog = () => {
  const { user, isOpenedDialog } = useUserDialogState();
  const { closeDialog } = useUserDialogDispatch();

  const { name, profileImage } = user;

  const dialogTransition = useTransition(
    isOpenedDialog, 
    USER_DIALOG_ANIMATION_STYLES
  );

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