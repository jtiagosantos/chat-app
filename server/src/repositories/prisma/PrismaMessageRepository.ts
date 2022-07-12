import { prisma } from '@/services/prisma';

//repositories
import { MessageRepository } from '@/repositories';

//types
import { CreateMessageData } from '../MessageRepository';

export class PrismaMessageRepository implements MessageRepository {
  public async createMessage ({ text, userId, roomCode }: CreateMessageData) {
    const message = await prisma.message.create({
      data: {
        text,
        userId,
        roomCode,
        createdAt: new Date(),
      },
      include: {
        user: {
          select: {
            username: true,
            profileImage: true,
          },
        },
      },
    });

    return message;
  }

  public async readMessages (roomCode: string) {
    const messages = await prisma.message.findMany({
      where: {
        roomCode,
      },
      select: {
        id: true,
        text: true,
        createdAt: true,
        user: {
          select: {
            username: true,
            profileImage: true,
          },
        },
      },
    });

    return messages;
  }
}