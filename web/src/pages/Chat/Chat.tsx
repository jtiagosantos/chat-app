import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useSearchParams } from 'react-router-dom';

//styles
import { Container } from './styles';
import { ProfileBar } from './components/ProfileBar/ProfileBar';
import { ChatBox } from './components/ChatBox/ChatBox';

export const Chat = () => {
  const [searchParams] = useSearchParams();
  const username = searchParams.get('username');
  const profilePhotoURL = searchParams.get('profile_photo');

  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>();
  const [messageText, setMessageText] = useState<string>('');
  const [messages, setMessages] = useState<Array<string>>([]);

  useEffect(() => {
    const socket = io('http://localhost:3333');

    setSocket(socket);

    socket.on('previous_messages', (previousMessages: Array<string>) => {
      setMessages([...previousMessages.reverse()]);
    })

    return () => {
      socket.disconnect();
    }
  }, []);

  const sendMessage = () => {
    const newMessage = `${messageText} - ${username}`;

    socket?.emit('send_message', newMessage);
    setMessages([newMessage, ...messages]);
    setMessageText('');
  }

  socket?.on('message_received', (message: string) => {
    setMessages([message, ...messages]);
  });

  return (
    <Container>
      <ProfileBar 
        username={username!} 
        profilePhotoURL={profilePhotoURL!} 
      />

      <ChatBox>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>

        <div>
          <input 
            type="text" 
            placeholder="message text..." 
            value={messageText}
            onChange={
              ({ target }) => setMessageText(target.value)
            }
          />

          <button 
            type="button" 
            onClick={sendMessage}
          >
            send message
          </button>
        </div>
      </ChatBox>
    </Container>
  );
}