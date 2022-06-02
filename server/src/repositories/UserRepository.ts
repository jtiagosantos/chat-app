import { prisma } from '../services/prisma';
import { UserDto } from '../models/User';
import { User } from '../types/user';

export class UserRepository {
  static async create(data: UserDto) {
    const user = await prisma.user.create({
      data: {
        username: data.username,
        profileImage: data.profileImage,
        email: data.email,
        password: data.password,
      },
    });

    return user;
  }

  static async read(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
}