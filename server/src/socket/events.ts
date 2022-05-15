import { io } from './io';

const messages: Array<string> = [];

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
