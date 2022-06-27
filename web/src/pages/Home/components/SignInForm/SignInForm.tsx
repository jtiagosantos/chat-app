import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

//hooks
import { useAuthDispatch } from '@/hooks';

//components
import { Form, Input, Button, PasswordField } from '@/components';

//schemas
import { signInSchema } from '@/schemas';

//types
import { SignInFormProps, FormData } from './types';

//styles
import * as S from './styles';
import { theme } from '@/styles/theme';

export const SignInForm: FC<SignInFormProps> = ({ className }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(signInSchema),
  });

  const { signIn } = useAuthDispatch();

  const { mutate } = useMutation(signIn, {
    onError: (error) => console.log(error),
    onSuccess: (data) => console.log(data)
  });

  const handleSignIn = (data: FormData) => {
    mutate(data);
  }

  return (
    <S.Container className={className}>
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
          >
            Login
          </Button>

          <S.Link href="/forgot-password">Forgot password?</S.Link>
        </S.Actions>
      </Form>
    </S.Container>
  );    
}