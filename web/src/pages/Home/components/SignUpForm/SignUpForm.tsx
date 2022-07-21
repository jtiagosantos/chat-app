import { FC, useEffect, useRef, useState } from 'react';
import { UserCircle } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';

//hooks
import { useAuthDispatch, useToastDispatch } from '@/hooks';

//components
import { Form, Input, PasswordField, Button } from '@/components';

//schemas
import { signUpSchema } from '@/schemas';

//types
import { SignUpFormProps, FormData } from './types';

//styles
import { Container, ImageProfile } from './styles';
import { theme } from '@/styles/theme';

export const SignUpForm: FC<SignUpFormProps> = ({ ...rest }) => {
  const { openToast } = useToastDispatch();
  const { signUp } = useAuthDispatch();
  
  const { control, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      username: '',
      profileImage: '',
      email: '',
      password: ''
    },
    resolver: yupResolver(signUpSchema),
  });
  
  const { mutate, isLoading } = useMutation(signUp, {
    onSuccess: () => {
      openToast({
        messageType: 'success',
        message: 'User registered successfully',
      });
    },
    onError: (error) => {
      openToast({
        messageType: 'error',
        message: error as string,
      });
    },
  });

  const handleSignUp = (data: FormData) => {
    mutate(data);
  }

  const watchProfileImage = watch('profileImage');

  return (
    <Container {...rest}>
      {watchProfileImage ? (
        <ImageProfile src={watchProfileImage} alt='Error loading image' />
      ): (
        <UserCircle size={125} color={theme.colors.white} weight='fill' />
      )}

      <Form width="100%" marginTop="30px" onSubmit={handleSubmit(handleSignUp)}>
        <Input 
          type="text" 
          width="100%"
          height="2.5rem"
          fontSize="0.875rem"
          textColor={theme.colors.manatee}
          placeholderColor={theme.colors.manatee}
          padding="0.5rem 0.625rem"
          placeholder="Insert your username"
          control={control}
          name='username'
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
          control={control}
          name='profileImage'
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
          control={control}
          name='email'
        />
        <PasswordField control={control} name='password' />

        <Button
          type="submit" 
          width="100%"
          height="2.5rem"
          marginTop="10px"
          loading={isLoading}
        >
          Register
        </Button>
      </Form>
    </Container>
  );
}