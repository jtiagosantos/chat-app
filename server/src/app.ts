import express from 'express';
import cors from 'cors'
import { constants } from './constants';
import { server } from './http/server';
import { socketEvents } from './socket/events';
import { app } from './http/server';
import { roomRoutes } from './routes/room.routes';
import { messageRoutes } from './routes/message.routes';

const { PORT } = constants;

socketEvents();
app.use(cors());
app.use(express.json());
app.use(roomRoutes);
app.use(messageRoutes);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`)
});  
