import { Router } from 'express';

import { UserController } from '@/controllers/UserController';

export const userRoutes = Router();

userRoutes.post('/user/sign-up', UserController.signUp);
userRoutes.get('/user/sign-in', UserController.signIn);