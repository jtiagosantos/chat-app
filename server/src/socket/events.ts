import { io } from './io';
import { Message } from '../types/message';

const messages: Array<Message> = [];
let usersCount = 0;

export const socketEvents = () => {
  const events = io.on('connection', (socket) => {
    io.emit('new_user_connected', usersCount += 1);
    io.emit('previous_messages', messages);
  
    socket.on('send_message', (message) => {
      messages.push(message);
      socket.broadcast.emit('message_received', message);
    });

    socket.on('disconnect', () => {
      io.emit('user_disconnected', usersCount -= 1);
    })
  });

  return events;
};
