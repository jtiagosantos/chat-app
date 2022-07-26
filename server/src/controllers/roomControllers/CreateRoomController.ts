import { Request, Response } from 'express';

//use cases
import { CreateRoomUseCase } from '@/useCases';

//utils
import { generateRoomCode } from '@/utils';

export class CreateRoomController {
  constructor (
    private createRoomUseCase: CreateRoomUseCase,
  ) {}

  public async handle (request: Request, response: Response) {
    const { name, userId } = request.body;

    if (!name) {
      response.status(400).json({
        data: null,
        error: 'Name is required',
      });

      return;
    }

    try {
      const roomCode = generateRoomCode();

      const room = await this.createRoomUseCase.execute({
        userId,
        name,
        code: roomCode,
      });

      return response.status(201).json(room);
    } catch (error) {
      const { message } = error as { message: string };

      response.status(500).json({
        data: null,
        error: message,
      });
    }
  }
}