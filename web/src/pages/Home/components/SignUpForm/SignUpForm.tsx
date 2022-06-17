import { FC } from 'react';
import { UserCircle } from 'phosphor-react';

//components
import { Form, Input, PasswordField, Button } from '@/components';

//types
import { SignUpFormProps } from './types';

//styles
import { Container } from './styles';
import { theme } from '@/styles/theme';

export const SignUpForm: FC<SignUpFormProps> = ({ className }) => {
  return (
    <Container className={className}>
      <UserCircle size={125} color={theme.colors.white} weight='fill' />

      <Form width="100%" marginTop="30px">
        <Input 
          type="text" 
          width="100%"
          height="2.5rem"
          fontSize="0.875rem"
          textColor={theme.colors.manatee}
          placeholderColor={theme.colors.manatee}
          padding="0.5rem 0.625rem"
          placeholder="Insert your username"
        />
        <Input 
          type="text" 
          width="100%"
          height="2.5rem"
          fontSize="0.875rem"
          textColor={theme.colors.manatee}
          placeholderColor={theme.colors.manatee}
          padding="0.5rem 0.625rem"
          placeholder="Insert your profile image url"
        />
        <Input 
          type="email" 
          width="100%"
          height="2.5rem"
          fontSize="0.875rem"
          textColor={theme.colors.manatee}
          placeholderColor={theme.colors.manatee}
          padding="0.5rem 0.625rem"
          placeholder="Insert your e-mail"
        />
        <PasswordField />

        <Button
          type="submit" 
          width="100%"
          height="2.5rem"
          marginTop="10px"
        >
          Register
        </Button>
      </Form>
    </Container>
  );
}