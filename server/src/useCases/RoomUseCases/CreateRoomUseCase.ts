//repositories
import { RoomRepository } from '@/repositories';

interface CreateRoomUseCaseDto {
  userId: number;
  name: string;
  code: string;
}

export class CreateRoomUseCase {
  constructor (
    private roomRepository: RoomRepository,
  ) {}

  public async execute ({ name, code, userId }: CreateRoomUseCaseDto) {
    return await this.roomRepository.createRoom({
      userId,
      name,
      code,
    });
  }
}