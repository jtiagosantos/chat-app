import { Request, Response } from 'express';

//use cases
import { ReadMessagesUseCase } from '@/useCases';

export class ReadMessagesController {
  constructor (
    private readMessagesUseCase: ReadMessagesUseCase,
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
      const messages = await this.readMessagesUseCase.execute(code);

      response.status(200).json(messages);
    } catch (error) {
      const { message } = error as { message: string };

      response.status(500).json({
        data: null,
        error: message,
      });
    }
  }
}