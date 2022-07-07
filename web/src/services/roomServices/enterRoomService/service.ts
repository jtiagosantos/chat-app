import { api } from '@/config/api';

//types
import { EnterRoomRequest } from './types';

//utils
import { errorHandler } from '@/utils';

export const enterRoomService = async ({ 
  roomCode 
}: EnterRoomRequest): Promise<void> => {
  try {
    await api.get(`/room/read/${roomCode}`);
  } catch (error) {
    errorHandler(error)
  }
}