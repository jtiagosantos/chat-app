import { FC } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';

//services
import { enterRoomService } from '@/services';

//components
import { Form, Input, Button } from '@/components';

//hooks
import { useAuthValidation, useToastDispatch, useTheme } from '@/hooks';

//schemas
import { enterRoomSchema } from '@/schemas';

//types
import { EnterRoomFormProps, FormData } from './types';

//styles
import { Container } from './styles';

export const EnterRoomForm: FC<EnterRoomFormProps> = ({ ...rest }) => {
  const navigate = useNavigate();
  const { isUserAuthenticated } = useAuthValidation();
  const { openToast } = useToastDispatch();
  const { colors } = useTheme();

  const { control, handleSubmit, getValues } = useForm<FormData>({
    defaultValues: {
      roomCode: '',
    },
    resolver: yupResolver(enterRoomSchema),
  });

  const { mutate, isLoading } = useMutation(enterRoomService, {
    onSuccess: () => navigateToChatPage(),
    onError: (error) => {
      openToast({
        messageType: 'error',
        message: error as string,
      });
    },
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
    const roomCode = getValues('roomCode');

    navigate({
      pathname: '/chat',
      search: createSearchParams({
        room_code: roomCode,
      }).toString(),
    });
  }

  return (
    <Container {...rest}>
      <Form width="100%" onSubmit={handleSubmit(handleEnterRooom)}>
        <Input 
          type="text" 
          width="100%"
          height="2.5rem"
          fontSize="0.875rem"
          textColor={colors.manatee}
          placeholderColor={colors.manatee}
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