import { FC } from 'react';

//components
import { Button } from '@/components';

//types
import { ButtonGroupProps } from './types';

//styles
import { Container } from './styles';

export const ButtonGroup: FC<ButtonGroupProps> = ({ 
  onOpenSignInForm, 
  onOpenSignUpForm,
  className
}) => {
  return (
    <Container className={className}>
      <Button 
        type="button" 
        width="100%"
        height="3rem"
        onClick={onOpenSignInForm}
      >
        Login
      </Button>
      <Button 
        type="button" 
        width="100%"
        height="3rem"
        onClick={onOpenSignUpForm}
      >
        Register
      </Button>
    </Container>
  );
}