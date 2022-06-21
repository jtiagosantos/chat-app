import { FC } from 'react';

//components
import { Button } from '@/components';

//types
import { ButtonGroupProps } from './types';

//styles
import { Container } from './styles';

export const ButtonGroup: FC<ButtonGroupProps> = ({ 
  onOpenCreateRoomForm, 
  onOpenEnterRoomForm,
  className
}) => {
  return (
    <Container className={className}>
      <Button 
        type="button" 
        width="100%"
        height="3rem"
        onClick={onOpenCreateRoomForm}
      >
        Create a room
      </Button>
      <Button 
        type="button" 
        width="100%"
        height="3rem"
        onClick={onOpenEnterRoomForm}
      >
        Enter a room
      </Button>
    </Container>
  );
}