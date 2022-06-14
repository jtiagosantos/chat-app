import { Router } from 'express';

import { RoomController } from '@/controllers/RoomController';
import { auth } from '@/middlewares/auth';

export const roomRoutes = Router();

roomRoutes.post('/room/create', auth, RoomController.createRoom);
roomRoutes.get('/room/read/:code', auth, RoomController.findUniqueRoomByCode);