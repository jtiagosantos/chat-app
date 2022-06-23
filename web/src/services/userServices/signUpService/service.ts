import { api } from '@/services/api';
import { SignUpDto } from './SignUpDto';
import { errorHandler } from '@/utils';

export const signUpService = async ({ 
  username, 
  profileImage, 
  email, 
  password 
}: SignUpDto) => {
  try {
    await api.post('/user/sign-up', {
      username,
      profileImage,
      email,
      password,
    });
  } catch (error) {
    errorHandler(error)
  }
}