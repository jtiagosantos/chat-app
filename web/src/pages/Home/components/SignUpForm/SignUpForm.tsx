import { FC, useEffect, useRef, useState } from 'react';
import { UserCircle } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//components
import { Form, Input, PasswordField, Button } from '@/components';

//schemas
import { signUpSchema } from '@/schemas';

//types
import { SignUpFormProps, FormData } from './types';

//styles
import { Container, ImageProfile } from './styles';
import { theme } from '@/styles/theme';

export const SignUpForm: FC<SignUpFormProps> = ({ className }) => {
  const [imageUrl, setImageUrl] = useState('');
  const isFirstRendering = useRef(true);

  const { control, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      username: '',
      profileImage: '',
      email: '',
      password: ''
    },
    resolver: yupResolver(signUpSchema),
  });

  const watchProfileImage = watch('profileImage');

  useEffect(() => {
    if (isFirstRendering.current) {
      isFirstRendering.current = false;
      
      return;
    }

    setImageUrl(watchProfileImage);
  }, [
    watchProfileImage
  ]);

  return (
    <Container className={className}>
      {imageUrl ? (
        <ImageProfile src={imageUrl} alt='image error' />
      ): (
        <UserCircle size={125} color={theme.colors.white} weight='fill' />
      )}

      <Form width="100%" marginTop="30px" onSubmit={handleSubmit(() => {})}>
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
        >
          Register
        </Button>
      </Form>
    </Container>
  );
}