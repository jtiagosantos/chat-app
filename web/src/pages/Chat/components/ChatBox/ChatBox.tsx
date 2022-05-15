import { FC, ReactNode } from 'react'; 

//styles
import { Container } from './styles';

interface ChatBoxProps {
  children: ReactNode;
}

export const ChatBox: FC<ChatBoxProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}