import { Router } from "express";

import { RoomController } from '../controllers/RoomController';

export const routes = Router();

routes.post('/room/create', RoomController.createRoom);
routes.get('/room/read/:code', RoomController.findUniqueRoomByCode);
