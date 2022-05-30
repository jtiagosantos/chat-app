import { FC } from 'react'; 

//types
import { ChatBoxProps } from './types';

//styles
import { Container } from './styles';

export const ChatBox: FC<ChatBoxProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}