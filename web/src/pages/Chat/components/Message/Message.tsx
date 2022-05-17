import { FC } from 'react';

//styles
import { Container } from './styles';

interface MessageProps {
  text: string;
  username: string;
  profilePhotoUrl: string;
  dateTime: string;
}

export const Message: FC<MessageProps> = ({ 
  text, 
  username, 
  profilePhotoUrl, 
  dateTime 
}) => {
  return (
    <Container>
      <div>
        <img src={profilePhotoUrl} alt={username} />
        <span>{username}</span>
        <span>{dateTime}</span>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </Container>
  );
}