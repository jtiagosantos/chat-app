import { FC } from 'react';
import dayjs from 'dayjs';

//hooks
import { useUserDialog } from '@/hooks/useUserDialog';

//types
import { MessageProps } from './types';

//styles
import * as S from './styles';

export const Message: FC<MessageProps> = ({ 
  text, 
  username, 
  profilePhotoUrl, 
  dateTime 
}) => {
  const { setUserData, onOpenDialog } = useUserDialog();

  const formattedDatetime = dayjs(dateTime).format('DD/MM/YYYY à[s] HH:mm');

  const handleShowUserDialog = () => {
    setUserData({ name: username, profileImage: profilePhotoUrl });
    onOpenDialog();
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