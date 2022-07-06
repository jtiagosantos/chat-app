import { Request, Response } from 'express';
import { MessageRepository } from '@/repositories/MessageRepository';

export class MessageController {
  static async createMessage(req: Request, res: Response) {
    try {
      const { body } = req;

      const message = await MessageRepository.create(body);

      res.status(202).json(message);
    } catch (error: any) {
      res.status(500).json({
        data: null,
        error: error?.message,
      });
    }
  }

  static async findMessagesByRoomCode(req: Request, res: Response) {
    try {
      const { code } = req.params;

      const messages = await MessageRepository.read(code);

      res.status(200).json({ data: messages });
    } catch (error: any) {
      res.status(500).json({
        data: null,
        error: error?.message,
      });
    }
  }
}