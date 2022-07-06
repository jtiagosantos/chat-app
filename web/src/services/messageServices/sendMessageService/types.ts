export interface SendMessageResponse {
  id: number;
  text: string;
  user: {
    username: string;
    profileImage: string;
  };
  createdAt: Date;
}