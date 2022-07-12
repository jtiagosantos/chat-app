//controllers
import { UserSignUpController } from './UserSignUpController';
import { UserSignInController } from './UserSignInController';

//repositories
import { PrismaUserRepository } from '@/repositories';

//use cases
import { UserSignUpUseCase } from '@/useCases';
import { UserSignInUseCase } from '@/useCases';

const prismaUserRepository = new PrismaUserRepository();
const userSignUpUseCase = new UserSignUpUseCase(prismaUserRepository);
const userSignInUseCase = new UserSignInUseCase(prismaUserRepository);

export const userSignUpController = new UserSignUpController(
  userSignUpUseCase,
  prismaUserRepository,
);

export const userSignInController = new UserSignInController(
  userSignInUseCase,
);