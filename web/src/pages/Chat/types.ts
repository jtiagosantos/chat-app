export interface Message {
  id: number;
  text: string;
  user: {
    username: string;
    profileImage: string;
  };
  createdAt: Date;
}

export interface FormData {
  messageText: string;
}