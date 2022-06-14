import { Router } from 'express';

import { MessageController } from '@/controllers/MessageController';
import { auth } from '@/middlewares/auth';

export const messageRoutes = Router();

messageRoutes.post('/message/create', auth, MessageController.createMessage);
messageRoutes.get('/messages/read/:code', auth, MessageController.findMessagesByRoomCode);