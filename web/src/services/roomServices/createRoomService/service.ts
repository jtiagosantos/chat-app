import { api } from '@/config/api';

//dtos
import { Dto } from '@/models/Dto';
import { RoomDto } from './RoomDto';

//types
import { CreateRoomResponse } from './types';

//utils
import { errorHandler } from '@/utils';

export const createRoomService = async (
  { roomName }: RoomDto
): Promise<Dto<CreateRoomResponse>> => {
  try {
    const { data } = await api.post('/room/create', {
      name: roomName,
    });

    return data;
  } catch (error) {
    errorHandler(error)
  }
}