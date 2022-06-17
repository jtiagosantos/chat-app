import { useState } from 'react';
import { Eye, EyeSlash } from 'phosphor-react';

//components
import { Form, Input, Button } from '@/components';

//styles
import * as S from './styles';
import { theme } from '@/styles/theme';

export const SignInForm = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  }

  return (
    <S.Container>
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
        <S.PasswordField>
          <Input 
            type={isShowPassword ? 'text' : 'password'} 
            width="100%"
            height="2.5rem"
            fontSize="0.875rem"
            textColor={theme.colors.manatee}
            placeholderColor={theme.colors.manatee}
            padding="0.5rem 3rem 0.5rem 0.625rem"
            placeholder="Insert your password"  
          />
          {isShowPassword ? (
            <EyeSlash size={23} color="gray" onClick={handleShowPassword} />
          ) : (
            <Eye size={23} color="gray" onClick={handleShowPassword} />
          )}
        </S.PasswordField>

        <S.Actions>
          <Button
            type="submit" 
            width="30%"
            height="2.5rem"
          >
            Entrar
          </Button>

          <S.Link href="/forgot-password">Esqueceu a senha?</S.Link>
        </S.Actions>
      </Form>
    </S.Container>
  );    
}