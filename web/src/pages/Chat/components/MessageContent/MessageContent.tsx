import { FC } from 'react';
import dayjs from 'dayjs';

//hooks
import { useUserDialogDispatch } from '@/hooks';

//types
import { MessageProps } from './types';

//styles
import * as S from './styles';

export const MessageContent: FC<MessageProps> = ({ 
  text, 
  username, 
  profilePhotoUrl, 
  dateTime 
}) => {
  const { setUserData, openDialog } = useUserDialogDispatch();

  const formattedDatetime = dayjs(dateTime).format('DD/MM/YYYY à[s] HH:mm');

  const handleShowUserDialog = () => {
    setUserData({ name: username, profileImage: profilePhotoUrl });
    openDialog();
  }

  return (
    <S.Container>
      <S.Wrapper>
        <img 
          src={profilePhotoUrl} 
          alt={username} 
          onClick={handleShowUserDialog} 
        />
        <S.Username>{username}</S.Username>
        <S.DateTime>{formattedDatetime}</S.DateTime>
      </S.Wrapper>
      <div>
        <S.MessageText>{text}</S.MessageText>
      </div>
    </S.Container>
  );
}