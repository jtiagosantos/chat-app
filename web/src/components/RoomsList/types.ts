interface Room {
  id: number;
  name: string;
  code: string;
}

export interface RoomsListProps {
  onCloseRoomsList: () => void;
  rooms: Array<Room>;
}