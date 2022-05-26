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
      const { data } = error.response;

      return {
        data: null,
        error: data.error,
      }
    }
  }

  static async findUniqueRoomByCode(roomCode: string): Promise<Dto<RoomDto>> {
    try {
      const { data } = await api.get(`/room/read/${roomCode}`);

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