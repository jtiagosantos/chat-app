import { QueryObserverResult } from 'react-query';

//dtos
import { Dto } from '@/models/Dto';

export interface Room {
  id: number;
  name: string;
  code: string;
}

export interface RoomsByUserStateContextData {
  rooms: Array<Room>;
  isLoading: Boolean;
}

export interface RoomsByUserDispatchContextData {
  refetchRooms: () => Promise<QueryObserverResult<Dto<Array<Room>>, unknown>>;
}