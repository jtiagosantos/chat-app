export interface Message {
  id: number;
  text: string;
  user: {
    username: string;
    profileImage: string;
  };
  createdAt: Date;
}

export interface CreateMessageData {
  text: string;
  userId: number;
  roomCode: string;
}

export interface MessageRepository {
  createMessage: (data: CreateMessageData) => Promise<Message>;
  readMessages: (roomCode: string) => Promise<Array<Message>>;
}