export interface Message {
  id?: number;
  text: string;
  author: string;
  profilePhotoUrl: string;
  roomCode: string;
  createdAt: Date;
}