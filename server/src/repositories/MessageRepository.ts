import { prisma } from '@/services/prisma';
import { MessageDto } from '@/models/Message';
import { Message } from '@/types/message';

export class MessageRepository {
  static async create(data: MessageDto): Promise<Message> {
    const message = await prisma.message.create({
      data: {
        text: data.text,
        userId: data.userId,
        roomCode: data.roomCode,
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

  static async read(roomCode: string): Promise<Array<MessageDto>> {
    const messages = await prisma.message.findMany({
      where: {
        roomCode,
      },
      include: {
        user: {
          select: {
            username: true,
            profileImage: true,
          }
        }
      }
    });

    return messages;
  }
}