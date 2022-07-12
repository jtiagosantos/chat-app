//repositories
import { RoomRepository } from '@/repositories';

interface CreateRoomUseCaseDto {
  name: string;
  code: string;
}

export class CreateRoomUseCase {
  constructor (
    private roomRepository: RoomRepository,
  ) {}

  public async execute ({ name, code }: CreateRoomUseCaseDto) {
    return await this.roomRepository.createRoom({
      name,
      code,
    });
  }
}