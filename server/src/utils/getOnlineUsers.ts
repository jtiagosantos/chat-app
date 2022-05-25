import { io } from '../socket/io';

export const getOnlineUsers = (roomCode: string) => {
  const onlineUsers = io.sockets.adapter.rooms.get(roomCode);

  return onlineUsers;
}