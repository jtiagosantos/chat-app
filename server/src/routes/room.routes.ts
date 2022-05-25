import { Router } from "express";

import { RoomController } from '../controllers/RoomController';

export const roomRoutes = Router();

roomRoutes.post('/room/create', RoomController.createRoom);
roomRoutes.get('/room/read/:code', RoomController.findUniqueRoomByCode);