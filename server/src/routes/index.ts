import { Router } from "express";

import { RoomController } from '../controllers/RoomController';
import { MessageController } from '../controllers/MessageController';

export const routes = Router();

routes.post('/room/create', RoomController.createRoom);
routes.get('/room/read/:code', RoomController.findUniqueRoomByCode);

routes.post('/message/create', MessageController.createMessage);
routes.get('/messages/read/:code', MessageController.findMessagesByRoomCode);