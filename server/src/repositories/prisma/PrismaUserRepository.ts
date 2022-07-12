import { prisma } from '@/config/prisma';

//repositories
import { UserRepository } from '@/repositories';

//types
import { CreateUserData } from '../UserRepository';

export class PrismaUserRepository implements UserRepository {
  public async createUser (
    { username, email, password, profileImage }: CreateUserData
  ) {
    await prisma.user.create({
      data: {
        username,
        profileImage,
        email,
        password,
      },
    });
  }

  public async readUser (email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
}