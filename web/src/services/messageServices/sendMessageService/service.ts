import { api } from '@/services/api';

//dto
import { MessageDto } from './MessageDto';

//types
import { SendMessageResponse } from './types';

//utils
import { errorHandler } from '@/utils';

export const sendMessageService = async (
  { text, userId, roomCode }: MessageDto
): Promise<SendMessageResponse | undefined> => {
  try {
    const { data } = await api.post('/message/create', {
      text,
      userId,
      roomCode,
    });

    return data;
  } catch (error) {
    errorHandler(error);
  }
}