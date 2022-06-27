interface SignInResponse {
  id: number;
  username: string;
  profileImage: string;
  token: string;
}

export interface SignUpUserData {
  username: string;
  profileImage: string;
  email: string;
  password: string;
}

export interface SignInUserData {
  email: string;
  password: string;
}

export interface AuthStateContextData {
  userId: string;
  username: string;
  profileImage: string;
}

export interface AuthDispatchContextData {
  signUp: (data: SignUpUserData) => Promise<void>;
  signIn: (data: SignInUserData) => Promise<SignInResponse | undefined>;
  signOut: () => void;
}