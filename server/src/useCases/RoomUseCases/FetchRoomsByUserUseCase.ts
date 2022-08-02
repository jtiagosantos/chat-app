//repositories
import { RoomRepository } from '@/repositories';

export class FetchRoomsByUserUseCase {
  constructor (
    private roomRepository: RoomRepository,
  ) {}

  public async execute(userId: number) {
    return await this.roomRepository.readRooms(userId);
  }
}