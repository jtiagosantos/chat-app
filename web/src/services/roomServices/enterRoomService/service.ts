import { api } from '@/services/api';

//types
import { EnterRoomRequest, EnterRoomResponse } from './types';

//utils
import { errorHandler } from '@/utils';

export const enterRoomService = async ({ 
  roomCode 
}: EnterRoomRequest): Promise<EnterRoomResponse | undefined> => {
  try {
    const { data } = await api.get(`/room/read/${roomCode}`);

    return data;
  } catch (error) {
    errorHandler(error)
  }
}