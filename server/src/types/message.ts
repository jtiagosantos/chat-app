export interface Message {
  id: number;
  text: string;
  user: {
    username: string;
    profileImage: string;
  };
  createdAt: Date;
}