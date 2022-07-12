import { Request, Response } from 'express';

//repositories
import { RoomRepository } from '@/repositories';

export class EnterRoomController {
  constructor (
    private roomRepository: RoomRepository,
  ) {}

  public async handle (request: Request, response: Response) {
    const { code } = request.params;

    if (!code) {
      response.status(400).json({
        data: null,
        error: 'Code is required',
      });

      return;
    }

    try {
      const room = await this.roomRepository.readRoom(code);

      if (!room) {
        response.status(404).json({
          data: null,
          error: 'Does not exist a room with this code',
        });

        return;
      }

      response.status(200).end();
    } catch (error) {
      const { message } = error as { message: string };

      response.status(500).json({
        data: null,
        error: message,
      });
    }
  }
}