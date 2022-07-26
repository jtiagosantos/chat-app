export interface CreateRoomData {
  userId: number;
  name: string;
  code: string;
}

type Room = Pick<CreateRoomData, 'code'>;

type RoomByUser = Omit<CreateRoomData, 'userId'> & {
  id: number;
};

export interface RoomRepository {
  createRoom: (data: CreateRoomData) => Promise<Room>;
  readRoom: (roomCode: string) => Promise<Room | null>;
  readRooms: (userId: number) => Promise<Array<RoomByUser>>;
}