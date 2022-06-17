import { FC } from 'react';

//components
import { Form, Input, Button, PasswordField } from '@/components';

//types
import { SignInFormProps } from './types';

//styles
import * as S from './styles';
import { theme } from '@/styles/theme';

export const SignInForm: FC<SignInFormProps> = ({ className }) => {
  return (
    <S.Container className={className}>
      <Form width="100%">
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

        <S.Actions>
          <Button
            type="submit" 
            width="30%"
            height="2.5rem"
          >
            Login
          </Button>

          <S.Link href="/forgot-password">Forgot password?</S.Link>
        </S.Actions>
      </Form>
    </S.Container>
  );    
}