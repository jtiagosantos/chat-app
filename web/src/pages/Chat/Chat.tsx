import { FormEvent, useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useSearchParams } from 'react-router-dom';
import { PaperPlaneRight } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

//components
import { ProfileBar } from './components/ProfileBar/ProfileBar';
import { ChatBox } from './components/ChatBox/ChatBox';
import { Message } from './components/Message/Message';

//types
import { MessageType } from '../../types/message';

//constants
import { constans } from '../../constants';

//styles
import { Container } from './styles';

export const Chat = () => {
  const [searchParams] = useSearchParams();
  const username = searchParams.get('username');
  const profilePhotoUrl = searchParams.get('profile_photo');
  const { socketPort } = constans;
  const socketRef = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>();

  const [messageText, setMessageText] = useState<string>('');
  const [messages, setMessages] = useState<Array<MessageType>>([]);
  const [quantityUsersOnline, setQuantityUsersOnline] = useState<number>(0);

  useEffect(() => {
    socketRef.current = io(socketPort);

    socketRef.current.on('previous_messages', (previousMessages: Array<MessageType>) => {
      setMessages(previousMessages.reverse());
    });
    socketRef.current.on('new_user_connected', (data: number) => {
      setQuantityUsersOnline(data)
    });
  }, [socketPort]);

  const onSubmitMessage = (event: FormEvent) => {
    event.preventDefault();

    if (!messageText) {
      alert('message field is required');
      return;
    }

    const currentDateTime = dayjs().format('DD/MM/YYYY à[s] HH:mm');

    const newMessage: MessageType = {
      id: uuidv4(),
      text: messageText,
      author: username!,
      createdAt: currentDateTime,
      profilePhotoUrl: profilePhotoUrl!,
    };

    socketRef?.current?.emit('send_message', newMessage);
    setMessages([newMessage, ...messages]);
    setMessageText('');
  }

  socketRef?.current?.on('message_received', (message: MessageType) => {
    setMessages([message, ...messages]);
  });

  socketRef?.current?.on('user_disconnected', (data: number) => {
    setQuantityUsersOnline(data);
  })

  return (
    <Container>
      <ProfileBar 
        username={username!} 
        profilePhotoURL={profilePhotoUrl!} 
        quantityUsersOnline={quantityUsersOnline}
      />

      <ChatBox>
        <ul>
          {messages.map((message) => (
            <Message 
              key={message.id} 
              text={message.text} 
              username={message.author}
              profilePhotoUrl={message.profilePhotoUrl}
              dateTime={message.createdAt}
            />
          ))}
        </ul>

        <form onSubmit={onSubmitMessage}>
          <input 
            type="text" 
            placeholder="message text..." 
            value={messageText}
            onChange={
              ({ target }) => setMessageText(target.value)
            }
          />

          <button type="submit" disabled={!messageText}>
            <PaperPlaneRight color='#FFF' weight='bold' size={18} />
          </button>
        </form>
      </ChatBox>
    </Container>
  );
}