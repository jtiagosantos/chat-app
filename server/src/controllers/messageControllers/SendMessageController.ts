import { Request, Response } from 'express';

//use cases
import { SendMessageUseCase } from '@/useCases';

export class SendMessageController {
  constructor (
    private sendMessageUseCase: SendMessageUseCase,
  ) {}

  public async handle (request: Request, response: Response) {
    const { text, roomCode } = request.body;
    const { userId } = request;

    if (!text) {
      response.status(400).json({
        data: null,
        error: 'Text is required',
      });

      return;
    }

    if (!userId) {
      response.status(400).json({
        data: null,
        error: 'userId is required',
      });

      return;
    }

    if (!roomCode) {
      response.status(400).json({
        data: null,
        error: 'roomCode is required',
      });

      return;
    }

    try {
      const message = await this.sendMessageUseCase.execute({
        text, 
        userId,
        roomCode,
      });

      response.status(201).json(message);
    } catch (error) {
      const { message } = error as { message: string };

      response.status(500).json({
        data: null,
        error: message,
      });
    }
  }
}