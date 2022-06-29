import { FC, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';

//services
import { createRoomService } from '@/services';

//components
import { Form, Input, Button } from '@/components';
import { CodeDialog } from '../CodeDialog/CodeDialog';

//hooks
import { useAuthValidation } from '@/hooks';

//schemas
import { createRoomSchema } from '@/schemas/createRoomSchema';

//types
import { CreateRoomFormProps, ComponentProps, FormData } from './types';

//styles
import { Container } from './styles';
import { theme } from '@/styles/theme';

const Component: FC<ComponentProps> = ({ 
  className, 
  isShowCodeDialog, 
  setCode, 
  openCodeDialog, 
  code 
}) => {
  const navigate = useNavigate();
  const { isUserAuthenticated } = useAuthValidation();

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      roomName: '',
    },
    resolver: yupResolver(createRoomSchema),
  });

  const { mutate, isLoading } = useMutation(createRoomService, {
    onSuccess: (data) => {
      setCode(data?.code!)
      openCodeDialog()
    },
    onError: (error) => console.log(error)
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
    <Container className={className}>
      {!isShowCodeDialog ? (
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
        <CodeDialog code={code} />
      )}
    </Container>
  );
}

export const CreateRoomForm: FC<CreateRoomFormProps> = ({ className }) => {
  const [isShowCodeDialog, setIsShowCodeDialog] = useState(false);
  const codeRef = useRef('');

  const openCodeDialog = useCallback(() => {
    setIsShowCodeDialog(true);
  }, []);

  const setCode = useCallback((code: string) => {
    codeRef.current = code;
  }, []);

  return (
    <>
      {className === 'opening-form' && (
        <Component 
          className='opening-form'
          isShowCodeDialog={isShowCodeDialog}
          openCodeDialog={openCodeDialog}
          setCode={setCode}
          code={codeRef.current}
        />
      )}
      {className === 'closing-form' && (
        <Component 
          className='closing-form'
          isShowCodeDialog={isShowCodeDialog}
          openCodeDialog={openCodeDialog}
          setCode={setCode}
          code={codeRef.current}
        />
      )}
    </>
  );    
}