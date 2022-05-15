import { Server } from 'socket.io';
import { server } from '../http/server';

export const io = new Server(server, {
  cors: {
    origin: '*',
  },
}); 
