import { api } from '@/config/api';

//dtos
import { SignInDto } from './SignInDto';

//types
import { SignInResponse } from './types';

//utils
import { errorHandler } from '@/utils';

export const signInService = async ({
  email,
  password,
}: SignInDto): Promise<SignInResponse | undefined> => {
  try {
    const { data } = await api.post('/user/sign-in', {
      email,
      password,
    });

    return data;
  } catch (error) {
    errorHandler(error);
  }
} 