import { FC } from 'react';
import dayjs from 'dayjs';

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
  const formattedDatetime = dayjs(dateTime).format('DD/MM/YYYY à[s] HH:mm');

  return (
    <Container>
      <div>
        <img src={profilePhotoUrl} alt={username} />
        <span>{username}</span>
        <span>{formattedDatetime}</span>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </Container>
  );
}