import { useCallback, useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useSearchParams } from 'react-router-dom';
import { PaperPlaneRight } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

//api services
import { sendMessageService } from '@/services';
import { fetchMessagesService } from '@/services';

//components
import { Input } from '@/components';
import { SpinnerLoading } from '@/components';
import { Header } from '@/components';
import { MessageContent } from './components';
import { UserDialog } from './components';
import { FetchingMessagesLoading } from './components';

//hooks
import { useAuthState } from '@/hooks';
import { useAuthValidation } from '@/hooks';

//schemas
import { chatSchema } from '@/schemas';

//types
import { Message, FormData } from './types';

//constants
import {
  SERVER_URL,
  SEND_MESSAGE,
  MESSAGE_RECEIVED,
  USER_DISCONNECTED,
  NEW_USER_CONNECTED,
} from '@/constants';

//styles
import * as S from './styles';
import { theme } from '@/styles/theme';

export const Chat = () => {
  const [searchParams] = useSearchParams();
  const roomCode = searchParams.get('room_code') as string;
  const socketRef = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>();
  const { userId, username, profileImage } = useAuthState();
  const navigate = useNavigate();
  const { isUserAuthenticated } = useAuthValidation();

  const [messages, setMessages] = useState<Array<Message>>([]);
  const [quantityUsersOnline, setQuantityUsersOnline] = useState<number>(0);

  const { control, handleSubmit, watch, reset } = useForm<FormData>({
    defaultValues: {
      messageText: '',
    },
    resolver: yupResolver(chatSchema),
  });

  const watchMessageText = watch('messageText');

  const {
    mutate: fetchMessages, 
    isLoading: isFetchingMessages,
  } = useMutation(fetchMessagesService, {
    onSuccess: (data) => setMessages(data!.reverse()),
  });

  const {
    mutate: sendMessage, 
    isLoading: isSendingMessage,
  } = useMutation(sendMessageService, {
    onSuccess: (data) => {
      reset();
      socketRef?.current?.emit(SEND_MESSAGE, data);
      setMessages([data!, ...messages]);
    },
  });

  const navigateToHomePage = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleSendMessage = async (formData: FormData) => {
    if (!isUserAuthenticated) {
      navigateToHomePage();
    }

    const { messageText } = formData;

    if (!messageText) {
      alert('message field is required');
      return;
    }

    const message = {
      userId: Number(userId),
      text: messageText,
      roomCode: roomCode,
    };

    sendMessage(message);
  }

  socketRef?.current?.on(MESSAGE_RECEIVED, (message: Message) => {
    setMessages([message, ...messages]);
  });

  socketRef?.current?.on(USER_DISCONNECTED, (newQuantityUsersOnline: number) => {
    setQuantityUsersOnline(newQuantityUsersOnline);
  });

  useEffect(() => {
    if (!isUserAuthenticated) {
      navigateToHomePage();
    } else {
      socketRef.current = io(SERVER_URL, {
        query: {
          roomCode,
        }
      });
  
      socketRef.current.on(NEW_USER_CONNECTED, (newQuantityUsersOnline: number) => {
        setQuantityUsersOnline(newQuantityUsersOnline)
      });
    }

    return () => {
      socketRef.current?.disconnect();
    }

  }, [
    roomCode,
    isUserAuthenticated,
    navigateToHomePage,
  ]);

  useEffect(() => {
    if (!isUserAuthenticated) {
      navigateToHomePage();
    } else {
      fetchMessages({ roomCode });
    }
  }, [
    roomCode, 
    fetchMessages,
    isUserAuthenticated,
    navigateToHomePage,
  ]);

  useEffect(() => {
    if (!isUserAuthenticated) {
      navigateToHomePage();
    }
  }, [
    isUserAuthenticated,
    navigateToHomePage,
  ]);

  return (
    <>
      <Header 
        profileImage={profileImage} 
        username={username} 
        onlineUsersNumber={quantityUsersOnline}
      />

      <S.Container>
        <S.ChatBox>
          {isFetchingMessages ? (
            <FetchingMessagesLoading />
          ) : (
            <S.MessageList>
              {messages.map((message) => (
                <MessageContent 
                  key={message.id} 
                  text={message.text} 
                  username={message.user.username}
                  profilePhotoUrl={message.user.profileImage}
                  dateTime={message.createdAt}
                />
              ))}
            </S.MessageList>
          )}

          <form onSubmit={handleSubmit(handleSendMessage)}>
            <Input 
              type="text" 
              width="100%"
              height="2.5rem"
              padding="0.5rem 0.625rem"
              textColor={theme.colors.manatee}
              placeholderColor={theme.colors.manatee}
              fontSize="0.875rem"
              placeholder="message text..." 
              control={control}
              name='messageText'
            />

            <S.SendMessageButton type="submit" disabled={!watchMessageText}>
              {isSendingMessage ? (
                <SpinnerLoading 
                  size={20}
                  borderSize={3}
                  secondaryColor={theme.colors.mediumslateblue}
                  primaryColor={theme.colors.white}
                />
              ) : (
                <PaperPlaneRight color={theme.colors.white} weight='bold' size={18} />
              )}
            </S.SendMessageButton>
          </form>
        </S.ChatBox>

        <UserDialog />
      </S.Container>
    </>
  );
}