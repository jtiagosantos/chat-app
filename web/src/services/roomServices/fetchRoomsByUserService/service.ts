import { api } from '@/config/api';

//dtos
import { Dto } from '@/models/Dto';

//utils
import { errorHandler } from '@/utils';

//types
import { FetchRoomsByUserResponse } from './types';

export const fetchRoomsByUserService = async (): Promise<
  Dto<FetchRoomsByUserResponse>
> => {
  try {
    const { data } = await api.get('/room/by-user');

    return data;
  } catch (error) {
    errorHandler(error);
  }
}