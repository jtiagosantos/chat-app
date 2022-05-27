import { api } from './api';
import { Dto } from '../models/Dto';
import { MessageDto } from '../models/Message';
import { Message } from '../types/message';

export class MessageService {
  static async createMessage(message: MessageDto): Promise<Dto<Message>> {
    try {
      const { data } = await api.post('/message/create', message);

      return data;
    } catch (error: any) {
      const { data } = error.response;

      return {
        data: null,
        error: data.error,
      }
    }
  }

  static async findMessagesByRoomCode(roomCode: string): Promise<Dto<Message[]>> {
    try {
      const { data } = await api.get(`messages/read/${roomCode}`);

      return data;
    } catch (error: any) {
      const { data } = error.response;

      return {
        data: null,
        error: data.error,
      }
    }
  }
}