//repositories
import { MessageRepository } from '@/repositories';

export class ReadMessagesUseCase {
  constructor (
    private messageRepository: MessageRepository,
  ) {}

  public async execute (roomCode: string) {
    return await this.messageRepository.readMessages(roomCode);
  }
}