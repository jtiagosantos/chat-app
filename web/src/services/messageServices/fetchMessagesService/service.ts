import { api } from '@/config/api';

//dtos
import { Dto } from '@/models/Dto';

//types
import { FindMessagesRequest, FindMessagesResponse } from './types';

//utils
import { errorHandler } from '@/utils';

export const fetchMessagesService = async (
  { roomCode }: FindMessagesRequest
): Promise<Dto<Array<FindMessagesResponse>>> => {
  try {
    const { data } = await api.get(`messages/read/${roomCode}`);

    return data;
  } catch (error) {
    errorHandler(error);
  }
}