import { prisma } from '@/config/prisma';

//repositories
import { RoomRepository } from '@/repositories';

//types
import { CreateRoomData } from '../RoomRepository';

export class PrismaRoomRepository implements RoomRepository {
  public async createRoom ({ name, code }: CreateRoomData) {
    const room = await prisma.room.create({
      data: {
        name,
        code,
      }
    });

    return room;
  }

  public async readRoom (roomCode: string) {
    const room = await prisma.room.findUnique({
      where: {
        code: roomCode,
      }
    });

    return room;
  }
}