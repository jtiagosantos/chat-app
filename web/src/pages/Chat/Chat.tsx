import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useSearchParams } from 'react-router-dom';
import { PaperPlaneRight } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';

//api services
import { sendMessageService } from '@/services';

//components
import { ProfileBar } from './components';
import { MessageContent } from './components';
import { UserDialog } from './components';
import { Input } from '@/components';

//hooks
import { useAuthState } from '@/hooks';

//schemas
import { chatSchema } from '@/schemas';

//types
import { Message, FormData } from './types';

//constants
import { constants } from '@/constants';

//styles
import * as S from './styles';
import { theme } from '@/styles/theme';

export const Chat = () => {
  const [searchParams] = useSearchParams();
  const roomCode = searchParams.get('room_code') as string;
  const socketRef = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>();
  const { SERVER, EVENTS } = constants;
  const { userId, username, profileImage } = useAuthState();

  const [messages, setMessages] = useState<Array<Message>>([]);
  const [quantityUsersOnline, setQuantityUsersOnline] = useState<number>(0);

  const { control, handleSubmit, watch, reset } = useForm<FormData>({
    defaultValues: {
      messageText: '',
    },
    resolver: yupResolver(chatSchema),
  });

  const watchMessageText = watch('messageText');

  useEffect(() => {
    socketRef.current = io(SERVER.URL, {
      query: {
        roomCode,
      }
    });

    socketRef.current.on(EVENTS.NEW_USER_CONNECTED, (newQuantityUsersOnline: number) => {
      setQuantityUsersOnline(newQuantityUsersOnline)
    });

    return () => {
      socketRef.current?.disconnect();
    }

  }, [
    roomCode,
    SERVER.URL,  
    EVENTS.NEW_USER_CONNECTED,
  ]);

  /* useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await MessageService.findMessagesByRoomCode(roomCode!);

      if (!data) {
        alert(error);
      } else {
        setMessages(data.reverse());
      }
    }

    fetchMessages();
  }, [roomCode]); */

  const { mutate } = useMutation(sendMessageService, {
    onSuccess: (data) => {
      reset();
      socketRef?.current?.emit(EVENTS.SEND_MESSAGE, data);
      setMessages([data!, ...messages]);
    },
  });

  const handleSendMessage = async (formData: FormData) => {
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

    mutate(message);
  }

  socketRef?.current?.on(EVENTS.MESSAGE_RECEIVED, (message: Message) => {
    setMessages([message, ...messages]);
  });

  socketRef?.current?.on(EVENTS.USER_DISCONNECTED, (newQuantityUsersOnline: number) => {
    setQuantityUsersOnline(newQuantityUsersOnline);
  })

  return (
    <S.Container>
      <ProfileBar 
        username={username} 
        profilePhotoURL={profileImage} 
        quantityUsersOnline={quantityUsersOnline}
      />

      <S.ChatBox>
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
            <PaperPlaneRight color={theme.colors.white} weight='bold' size={18} />
          </S.SendMessageButton>
        </form>
      </S.ChatBox>

      <UserDialog />
    </S.Container>
  );
}