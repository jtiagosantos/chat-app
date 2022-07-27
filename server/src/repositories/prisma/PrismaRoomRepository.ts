import { prisma } from '@/config/prisma';

//repositories
import { RoomRepository } from '@/repositories';

//types
import { CreateRoomData } from '../RoomRepository';

export class PrismaRoomRepository implements RoomRepository {
  public async createRoom ({ name, code, userId }: CreateRoomData) {
    const room = await prisma.room.create({
      data: {
        userId,
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

  public async readRooms (userId: number) {
    const rooms = await prisma.room.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        name: true,
        code: true,
      },
    });

    return rooms;
  }
}