//repositories
import { MessageRepository } from '@/repositories';

interface SendMessageUseCaseDto {
  text: string;
  userId: number;
  roomCode: string;
}

export class SendMessageUseCase {
  constructor (
    private messageRepository: MessageRepository,
  ) {}

  public async execute ({ text, userId, roomCode }: SendMessageUseCaseDto) {
    return await this.messageRepository.createMessage({
      text,
      userId,
      roomCode,
    });
  }
}