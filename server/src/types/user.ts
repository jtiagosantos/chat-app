export interface User {
  id: number;
  username: string;
  email?: string;
  profileImage: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}