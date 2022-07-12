import { Router } from 'express';

//controllers
import { userSignUpController, userSignInController } from '@/controllers';

export const userRoutes = Router();

userRoutes.post('/user/sign-up', async (request, response) => {
  return userSignUpController.handle(request, response);
});
userRoutes.post('/user/sign-in', async (request, response) => {
  return userSignInController.handle(request, response);
});