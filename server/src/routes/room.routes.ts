import { Router } from 'express';

//controllers
import { 
  createRoomController, 
  enterRoomController,
  fetchRoomsByUserController 
} from '@/controllers';

//middlewares
import { auth } from '@/middlewares/auth';

export const roomRoutes = Router();

roomRoutes.post('/room/create', auth, async (request, response) => {
  return createRoomController.handle(request, response);
});
roomRoutes.get('/room/read/:code', auth, async (request, response) => {
  return enterRoomController.handle(request, response);
});
roomRoutes.get('/room/by-user', auth, async (request, response) => {
  return  fetchRoomsByUserController.handle(request, response);
});