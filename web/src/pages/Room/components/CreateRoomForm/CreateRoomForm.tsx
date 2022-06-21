import { FC } from 'react';

//components
import { Form, Input, Button } from '@/components';

//types
import { CreateRoomFormProps } from './types';

//styles
import { Container } from './styles';
import { theme } from '@/styles/theme';

export const CreateRoomForm: FC<CreateRoomFormProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Form width="100%">
        <Input 
          type="email" 
          width="100%"
          height="2.5rem"
          fontSize="0.875rem"
          textColor={theme.colors.manatee}
          placeholderColor={theme.colors.manatee}
          padding="0.5rem 0.625rem"
          placeholder="Insert the room name" 
        />  

        <Button
          type="submit" 
          width="100%"
          height="2.5rem"
          marginTop="10px"
        >
          Create room
        </Button>
      </Form>
    </Container>
  );    
}