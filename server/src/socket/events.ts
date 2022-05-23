import { constants } from '../constants'
import { io } from './io';
import { Message } from '../types/message';

const { EVENTS } = constants;
const messages: Array<Message> = [];
let usersCount = 0;

export const socketEvents = () => {
  const events = io.on('connection', (socket) => {
    io.emit(EVENTS.NEW_USER_CONNECTED, usersCount += 1);
    io.emit(EVENTS.PREVIOUS_MESSAGES, messages);
  
    socket.on(EVENTS.SEND_MESSAGE, (message) => {
      messages.push(message);
      socket.broadcast.emit(EVENTS.MESSAGE_RECEIVED, message);
    });

    socket.on('disconnect', () => {
      io.emit(EVENTS.USER_DISCONNECTED, usersCount -= 1);
    })
  });

  return events;
};
