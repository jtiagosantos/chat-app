//controllers
import { CreateRoomController } from './CreateRoomController';
import { EnterRoomController } from './EnterRoomController';

//repositories
import { PrismaRoomRepository } from '@/repositories';

//use cases
import { CreateRoomUseCase } from '@/useCases';

const prismaRoomRepository = new PrismaRoomRepository();
const createRoomUseCase = new CreateRoomUseCase(prismaRoomRepository);

export const createRoomController = new CreateRoomController(
  createRoomUseCase,
);

export const enterRoomController = new EnterRoomController(
  prismaRoomRepository,
);