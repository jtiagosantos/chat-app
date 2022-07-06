import { api } from '@/services/api';

//types
import { FindMessagesRequest, FindMessagesResponse } from './types';

//utils
import { errorHandler } from '@/utils';

export const findMessagesService = async (
  { roomCode }: FindMessagesRequest
): Promise<Array<FindMessagesResponse> | undefined> => {
  try {
    const { data } = await api.get(`messages/read/${roomCode}`);

    return data;
  } catch (error) {
    errorHandler(error);
  }
}