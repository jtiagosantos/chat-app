export interface CreateRoomData {
  userId: number;
  name: string;
  code: string;
}

type Room = Pick<CreateRoomData, 'code'>;

export interface RoomRepository {
  createRoom: (data: CreateRoomData) => Promise<Room>;
  readRoom: (roomCode: string) => Promise<Room | null>;
  readRooms: (userId: number) => Promise<Array<Room>>;
}