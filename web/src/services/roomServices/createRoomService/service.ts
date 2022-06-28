import { api } from '@/services/api';

//dto
import { RoomDto } from './RoomDto';

//types
import { CreateRoomResponse } from './types';

//utils
import { errorHandler } from '@/utils';

export const createRoomService = async (
  { roomName }: RoomDto
): Promise<CreateRoomResponse | undefined> => {
  try {
    const { data } = await api.post('/room/create', {
      name: roomName,
    });

    return data;
  } catch (error) {
    errorHandler(error)
  }
}