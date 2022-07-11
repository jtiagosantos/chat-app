import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

//hooks
import { useAuthDispatch, useToastDispatch } from '@/hooks';

//components
import { Form, Input, Button, PasswordField } from '@/components';

//schemas
import { signInSchema } from '@/schemas';

//types
import { SignInFormProps, FormData } from './types';

//styles
import * as S from './styles';
import { theme } from '@/styles/theme';

export const SignInForm: FC<SignInFormProps> = ({ ...rest }) => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(signInSchema),
  });

  const { openToast } = useToastDispatch();
  const { signIn } = useAuthDispatch();

  const { mutate, isLoading } = useMutation(signIn, {
    onError: (error) => {
      openToast({
        messageType: 'error',
        message: error as string,
      });
    },
    onSuccess: () => {
      navigateToRoomPage();
      openToast({
        messageType: 'success',
        message: 'User logged in successfully',
      });
    },
  });

  const handleSignIn = (data: FormData) => {
    mutate(data);
  }

  const navigateToRoomPage = () => {
    navigate('/room');
  }

  return (
    <S.Container {...rest}>
      <Form width="100%" onSubmit={handleSubmit(handleSignIn)}>
        <Input 
          type="email" 
          width="100%"
          height="2.5rem"
          fontSize="0.875rem"
          textColor={theme.colors.manatee}
          placeholderColor={theme.colors.manatee}
          padding="0.5rem 0.625rem"
          placeholder="Insert your e-mail" 
          control={control}
          name='email'
        />
        <PasswordField control={control} name='password' />  

        <S.Actions>
          <Button
            type="submit" 
            width="30%"
            height="2.5rem"
            loading={isLoading}
          >
            Login
          </Button>

          <S.Link href="/forgot-password">Forgot password?</S.Link>
        </S.Actions>
      </Form>
    </S.Container>
  );    
}