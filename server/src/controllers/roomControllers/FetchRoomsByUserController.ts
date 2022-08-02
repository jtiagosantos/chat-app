import { Request, Response } from 'express';

//use cases
import { FetchRoomsByUserUseCase } from '@/useCases';

export class FetchRoomsByUserController {
  constructor (
    private fetchRoomsByUserUseCase: FetchRoomsByUserUseCase,
  ) {}

  public async handle(request: Request, response: Response) {
    const { userId } = request;

    if (!userId) {
      response.status(400).json({
        data: null,
        error: 'userId is required',
      });

      return;
    }

    try {
      const rooms = await this.fetchRoomsByUserUseCase.execute(Number(userId));

      return response.status(200).json(rooms);
    } catch (error) {
      const { message } = error as { message: string };

      response.status(500).json({
        data: null,
        error: message,
      });
    }
  }
}