//controllers
import { CreateRoomController } from './CreateRoomController';
import { EnterRoomController } from './EnterRoomController';
import { FetchRoomsByUserController } from './FetchRoomsByUserController';

//repositories
import { PrismaRoomRepository } from '@/repositories';

//use cases
import { CreateRoomUseCase, FetchRoomsByUserUseCase } from '@/useCases';

const prismaRoomRepository = new PrismaRoomRepository();
const createRoomUseCase = new CreateRoomUseCase(prismaRoomRepository);
const fetchRoomsByUserUseCase = new FetchRoomsByUserUseCase(prismaRoomRepository);

export const createRoomController = new CreateRoomController(
  createRoomUseCase,
);

export const enterRoomController = new EnterRoomController(
  prismaRoomRepository,
);

export const fetchRoomsByUserController = new FetchRoomsByUserController(
  fetchRoomsByUserUseCase,
);