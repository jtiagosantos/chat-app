import { prisma } from '../services/prisma';
import { RoomDto } from '../models/Room';

export class RoomRepository {
  static async create(data: RoomDto): Promise<RoomDto> {
    const room = await prisma.room.create({
      data: {
        name: data.name,
        code: data.code,
      }
    });

    return room;
  }

  static async read(roomCode: string): Promise<RoomDto | null> {
    const room = await prisma.room.findUnique({
      where: {
        code: roomCode,
      }
    });

    return room;
  }
}