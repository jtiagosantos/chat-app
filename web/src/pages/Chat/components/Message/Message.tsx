import { FC } from 'react';
import dayjs from 'dayjs';

//hooks
import { useUserDialog } from '../../../../hooks/useUserDialog';

//types
import { MessageProps } from './types';

//styles
import { Container } from './styles';

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
    <Container>
      <div>
        <img 
          src={profilePhotoUrl} 
          alt={username} 
          onClick={handleShowUserDialog} 
        />
        <span>{username}</span>
        <span>{formattedDatetime}</span>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </Container>
  );
}