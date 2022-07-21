import { FC, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';

//services
import { createRoomService } from '@/services';

//components
import { Form, Input, Button } from '@/components';
import { ShareCode } from '../ShareCode/ShareCode';

//hooks
import { useAuthValidation, useToastDispatch } from '@/hooks';

//schemas
import { createRoomSchema } from '@/schemas/createRoomSchema';

//types
import { CreateRoomFormProps, FormData } from './types';

//styles
import { Container } from './styles';
import { theme } from '@/styles/theme';

export const CreateRoomForm: FC<CreateRoomFormProps> = ({ ...rest }) => {
  const navigate = useNavigate();
  const { isUserAuthenticated } = useAuthValidation();
  const { openToast } = useToastDispatch();

  const [isShowShareCode, setIsShowShareCode] = useState(false);
  const codeRef = useRef('');

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      roomName: '',
    },
    resolver: yupResolver(createRoomSchema),
  });

  const openShareCode = () => {
    setIsShowShareCode(true);
  };

  const setCode = (code: string) => {
    codeRef.current = code;
  };

  const { mutate, isLoading } = useMutation(createRoomService, {
    onSuccess: (data) => {
      setCode(data?.code!);
      openShareCode();
    },
    onError: () => {
      openToast({
        messageType: 'error',
        message: 'Error creating room. Try again',
      });
    }
  });

  const handleCreateRoom = (data: FormData) => {
    if (!isUserAuthenticated) {
      navigateToHomePage();

      return;
    }

    const { roomName } = data;

    mutate({ roomName });
  }

  const navigateToHomePage = () => {
    navigate('/');
  }

  return (
    <Container {...rest}>
      {!isShowShareCode ? (
        <Form width="100%" onSubmit={handleSubmit(handleCreateRoom)}>
          <Input 
            type="text" 
            width="100%"
            height="2.5rem"
            fontSize="0.875rem"
            textColor={theme.colors.manatee}
            placeholderColor={theme.colors.manatee}
            padding="0.5rem 0.625rem"
            placeholder="Insert the room name" 
            control={control}
            name='roomName'
          />  

          <Button
            type="submit" 
            width="100%"
            height="2.5rem"
            marginTop="10px"
            loading={isLoading}
          >
            Create room
          </Button>
        </Form>
      ) : (
        <ShareCode code={codeRef.current} />
      )}
    </Container>
  );    
}