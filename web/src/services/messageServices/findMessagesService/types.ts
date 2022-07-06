export interface FindMessagesRequest {
  roomCode: string;
}

export interface FindMessagesResponse {
  id: number;
  text: string;
  user: {
    username: string;
    profileImage: string;
  };
  createdAt: Date;
}