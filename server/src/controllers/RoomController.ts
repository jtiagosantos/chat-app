import { Request, Response } from 'express';
import { RoomRepository } from '@/repositories/RoomRepository';
import { generateRoomCode } from '@/utils/generateRoomCode';

export class RoomController {
  static async createRoom(req: Request, res: Response) {
    try {
      const { body } = req;
      const roomCode = generateRoomCode();
      
      const room = {
        ...body,
        code: roomCode,
      };

      const newRoom = await RoomRepository.create(room);

      res.status(202).json(newRoom);
    } catch (error: any) {
      res.status(500).json({
        data: null,
        error: error?.message,
      });
    }
  }

  static async findUniqueRoomByCode(req: Request, res: Response) {
    try {
      const { code } = req.params;

      const room = await RoomRepository.read(code);

      if (!room) {
        res.status(404).json({
          data: null,
          error: 'Does not exist a room with this code',
        });

        return;
      }

      res.status(200).json(room);
    } catch (error: any) {
      res.status(500).json({
        data: null,
        error: error?.message,
      });
    }
  }
}