import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

//hooks
import { 
  useAuthDispatch, 
  useToastDispatch, 
  useRoomsByUserDispatch,
  useTheme, 
} from '@/hooks';

//components
import { Form, Input, Button, PasswordField } from '@/components';

//schemas
import { signInSchema } from '@/schemas';

//types
import { SignInFormProps, FormData } from './types';

//styles
import * as S from './styles';

export const SignInForm: FC<SignInFormProps> = ({ ...rest }) => {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(signInSchema),
  });

  const { openToast } = useToastDispatch();
  const { signIn } = useAuthDispatch();
  const { refetchRooms } = useRoomsByUserDispatch();

  const { mutate, isLoading } = useMutation(signIn, {
    onSuccess: () => {
      navigateToRoomPage();
      openToast({
        messageType: 'success',
        message: 'User logged in successfully',
      });
      refetchRooms();
    },
    onError: (error) => {
      openToast({
        messageType: 'error',
        message: error as string,
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
          textColor={colors.manatee}
          placeholderColor={colors.manatee}
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