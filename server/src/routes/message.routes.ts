import { Router } from "express";

import { MessageController } from '../controllers/MessageController';

export const messageRoutes = Router();

messageRoutes.post('/message/create', MessageController.createMessage);
messageRoutes.get('/messages/read/:code', MessageController.findMessagesByRoomCode);