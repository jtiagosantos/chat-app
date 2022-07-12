import { constants } from '@/constants'
import { io } from './io';
import { getOnlineUsers } from '@/utils';

const { EVENTS } = constants;

export const socketEvents = () => {
  const events = io.on('connection', (socket) => {
    const roomCode = socket.handshake.query.roomCode as string;
    let onlineUsers = getOnlineUsers(roomCode);

    socket.join(roomCode);

    io.to(roomCode).emit(EVENTS.NEW_USER_CONNECTED, onlineUsers?.size ?? 1);
  
    socket.on(EVENTS.SEND_MESSAGE, (message) => {
      socket.broadcast.to(roomCode).emit(EVENTS.MESSAGE_RECEIVED, message);
    });

    socket.on('disconnect', () => {
      socket.leave(roomCode);
      onlineUsers = getOnlineUsers(roomCode);
      io.to(roomCode).emit(EVENTS.USER_DISCONNECTED, onlineUsers?.size ?? 0);
    });
  });

  return events;
};
