import { NEW_USER_CONNECTED, SEND_MESSAGE, MESSAGE_RECEIVED, USER_DISCONNECTED } from '@/constants'
import { io } from './io';
import { getOnlineUsers } from '@/utils';

export const socketEvents = () => {
  const events = io.on('connection', (socket) => {
    const roomCode = socket.handshake.query.roomCode as string;
    let onlineUsers = getOnlineUsers(roomCode);

    socket.join(roomCode);

    io.to(roomCode).emit(NEW_USER_CONNECTED, onlineUsers?.size ?? 1);
  
    socket.on(SEND_MESSAGE, (message) => {
      socket.broadcast.to(roomCode).emit(MESSAGE_RECEIVED, message);
    });

    socket.on('disconnect', () => {
      socket.leave(roomCode);
      onlineUsers = getOnlineUsers(roomCode);
      io.to(roomCode).emit(USER_DISCONNECTED, onlineUsers?.size ?? 0);
    });
  });

  return events;
};
