import { Request, Response } from 'express';
import { RoomRepository } from '../repositories/RoomRepository';
import { generateRoomCode } from '../utils/generateRoomCode';

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

      res.status(202).json({ data: newRoom });
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

      res.status(202).json({ data: room });
    } catch (error: any) {
      res.status(500).json({
        data: null,
        error: error?.message,
      });
    }
  }
}