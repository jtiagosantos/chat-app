import { FormEvent, useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useSearchParams } from 'react-router-dom';
import { PaperPlaneRight } from 'phosphor-react';

//components
import { ProfileBar } from './components/ProfileBar/ProfileBar';
import { ChatBox } from './components/ChatBox/ChatBox';
import { Message } from './components/Message/Message';

//api services
import { MessageService } from '../../services/message.service';

//types
import { Message as IMessage } from '../../types/message';

//constants
import { constants } from '../../constants';

//styles
import { Container } from './styles';

export const Chat = () => {
  const [searchParams] = useSearchParams();
  const username = searchParams.get('username');
  const profilePhotoUrl = searchParams.get('profile_photo');
  const roomCode = searchParams.get('room_code');
  const socketRef = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>();
  const { SERVER, EVENTS } = constants;

  const [messageText, setMessageText] = useState<string>('');
  const [messages, setMessages] = useState<Array<IMessage>>([]);
  const [quantityUsersOnline, setQuantityUsersOnline] = useState<number>(0);

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

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await MessageService.findMessagesByRoomCode(roomCode!);

      if (!data) {
        alert(error);
      } else {
        setMessages(data);
      }
    }

    fetchMessages();
  }, [roomCode]);

  const onSubmitMessage = async (event: FormEvent) => {
    event.preventDefault();

    if (!messageText) {
      alert('message field is required');
      return;
    }

    const message = {
      text: messageText,
      author: username!,
      roomCode: roomCode!,
      profilePhotoUrl: profilePhotoUrl!,
    };

    const { data, error } = await MessageService.createMessage(message);

    if (!data) {
      alert(error);
      return;
    }

    socketRef?.current?.emit(EVENTS.SEND_MESSAGE, data);
    setMessages([data, ...messages]);
    setMessageText('');
  }

  socketRef?.current?.on(EVENTS.MESSAGE_RECEIVED, (message: IMessage) => {
    setMessages([message, ...messages]);
  });

  socketRef?.current?.on(EVENTS.USER_DISCONNECTED, (newQuantityUsersOnline: number) => {
    setQuantityUsersOnline(newQuantityUsersOnline);
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