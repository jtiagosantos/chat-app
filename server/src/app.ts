import express from 'express';
import { constants } from './constants';
import { server } from './http/server';
import { socketEvents } from './socket/events';
import { app } from './http/server';
import { routes } from './routes';

const { PORT } = constants;

socketEvents();
app.use(express.json());
app.use(routes);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`)
});  
