import { constants } from '../constants'
import { io } from './io';
import { Message } from '../types/message';

const { EVENTS } = constants;
const messages: Array<Message> = [];
let usersCount = 0;

export const socketEvents = () => {
  const events = io.on('connection', (socket) => {
    const roomCode = socket.handshake.query.roomCode as string;
    const messagesByRoom = messages.filter((message) => message.roomCode === roomCode);

    socket.join(roomCode);

    io.to(roomCode).emit(EVENTS.NEW_USER_CONNECTED, usersCount += 1);
    io.to(roomCode).emit(EVENTS.PREVIOUS_MESSAGES, messagesByRoom);
  
    socket.on(EVENTS.SEND_MESSAGE, (message) => {
      messages.push(message);
      socket.broadcast.to(roomCode).emit(EVENTS.MESSAGE_RECEIVED, message);
    });

    socket.on('disconnect', () => {
      io.to(roomCode).emit(EVENTS.USER_DISCONNECTED, usersCount -= 1);
    })
  });

  return events;
};
