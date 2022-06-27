import { api } from '@/services/api';

//dto
import { SignUpDto } from './SignUpDto';

//utils
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