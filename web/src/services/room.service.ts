import { api } from './api';
import { Dto } from '../models/Dto';
import { RoomDto } from '../models/Room';

export class RoomService {
  static async createRoom(roomName: string): Promise<Dto<RoomDto>> {
    try {
      const { data } = await api.post('/room/create', {
        name: roomName,
      });

      return data;
    } catch (error: any) {
      return {
        data: null,
        error: error.message,
      }
    }
  }
}