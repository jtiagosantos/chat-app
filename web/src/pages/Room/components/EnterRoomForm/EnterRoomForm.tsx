import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';

//services
import { enterRoomService } from '@/services';

//components
import { Form, Input, Button } from '@/components';

//hooks
import { useAuthValidation } from '@/hooks';

//schemas
import { enterRoomSchema } from '@/schemas';

//types
import { EnterRoomFormProps, FormData } from './types';

//styles
import { Container } from './styles';
import { theme } from '@/styles/theme';

export const EnterRoomForm: FC<EnterRoomFormProps> = ({ className }) => {
  const navigate = useNavigate();
  const { isUserAuthenticated } = useAuthValidation();

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      roomCode: '',
    },
    resolver: yupResolver(enterRoomSchema),
  });

  const { mutate, isLoading } = useMutation(enterRoomService, {
    onSuccess: () => navigateToChatPage(),
    onError: (error) => console.log(error),
  });

  const handleEnterRooom = (data: FormData) => {
    if (!isUserAuthenticated) {
      navigateToHomePage();

      return;
    }

    const { roomCode } = data;

    mutate({ roomCode });
  }

  const navigateToHomePage = () => {
    navigate('/');
  }

  const navigateToChatPage = () => {
    navigate('/chat');
  }

  return (
    <Container className={className}>
      <Form width="100%" onSubmit={handleSubmit(handleEnterRooom)}>
        <Input 
          type="text" 
          width="100%"
          height="2.5rem"
          fontSize="0.875rem"
          textColor={theme.colors.manatee}
          placeholderColor={theme.colors.manatee}
          padding="0.5rem 0.625rem"
          placeholder="Insert the room code"
          control={control}
          name='roomCode' 
        />  

        <Button
          type="submit" 
          width="100%"
          height="2.5rem"
          marginTop="10px"
          loading={isLoading}
        >
          Enter room
        </Button>
      </Form>
    </Container>
  );
}