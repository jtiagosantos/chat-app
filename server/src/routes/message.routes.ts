import { Router } from 'express';

//controllers
import { sendMessageController, readMessagesController } from '@/controllers';

//middlewares
import { auth } from '@/middlewares/auth';

export const messageRoutes = Router();

messageRoutes.post('/message/create', auth, async (request, respose) => {
  return sendMessageController.handle(request, respose);
});
messageRoutes.get('/messages/read/:code', auth, async (request, respose) => {
  return readMessagesController.handle(request, respose);
});