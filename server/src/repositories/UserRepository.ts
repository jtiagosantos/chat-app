interface User {
  id: number;
  username: string;
  email?: string;
  profileImage: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateUserData {
  username: string;
  email: string;
  profileImage: string;
  password: string;
}

export interface UserRepository {
  createUser: (data: CreateUserData) => Promise<void>;
  readUser: (email: string) => Promise<User | null>;
}