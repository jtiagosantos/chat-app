export interface Room {
  id: number;
  name: string;
  code: string;
}

export interface RoomsByUserStateContextData {
  rooms: Array<Room>;
}

export interface RoomsByUserDispatchContextData {
  fetchRooms: () => Promise<void>;
}