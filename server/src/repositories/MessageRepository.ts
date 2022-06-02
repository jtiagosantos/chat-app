import { prisma } from '../services/prisma';
import { MessageDto } from '../models/Message';

export class MessageRepository {
  static async create(data: MessageDto): Promise<MessageDto> {
    const message = await prisma.message.create({
      data: {
        text: data.text,
        roomCode: data.roomCode,
        userId: data.userId,
      }
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