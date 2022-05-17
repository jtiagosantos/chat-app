import { io } from './io';
import { Message } from '../types/message';

const messages: Array<Message> = [];

export const socketEvents = () => {
  const events = io.on('connection', (socket) => {  
    socket.emit('previous_messages', messages);
  
    socket.on('send_message', (message) => {
      messages.push(message);
      socket.broadcast.emit('message_received', message);
    });
  });

  return events;
};
