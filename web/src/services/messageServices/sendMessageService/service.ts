import { api } from '@/config/api';

//dtos
import { Dto } from '@/models/Dto';
import { MessageDto } from './MessageDto';

//types
import { SendMessageResponse } from './types';

//utils
import { errorHandler } from '@/utils';

export const sendMessageService = async (
  { text, roomCode }: MessageDto
): Promise<Dto<SendMessageResponse>> => {
  try {
    const { data } = await api.post('/message/create', {
      text,
      roomCode,
    });

    return data;
  } catch (error) {
    errorHandler(error);
  }
}