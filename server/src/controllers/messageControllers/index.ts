//controllers
import { SendMessageController } from './SendMessageController';
import { ReadMessagesController } from './ReadMessagesController';

//repositories
import { PrismaMessageRepository } from '@/repositories';

//use cases
import { SendMessageUseCase, ReadMessagesUseCase } from '@/useCases';

const prismaMessageRepository = new PrismaMessageRepository();
const sendMessageUseCase = new SendMessageUseCase(
  prismaMessageRepository,
);
const readMessagesUseCase = new ReadMessagesUseCase(
  prismaMessageRepository,
);

export const sendMessageController = new SendMessageController(
  sendMessageUseCase,
);

export const readMessagesController = new ReadMessagesController(
  readMessagesUseCase,
);