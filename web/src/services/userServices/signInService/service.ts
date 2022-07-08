import { api } from '@/config/api';

//dtos
import { SignInDto } from './SignInDto';
import { Dto } from '@/models/Dto';

//types
import { SignInResponse } from './types';

//utils
import { errorHandler } from '@/utils';

export const signInService = async ({
  email,
  password,
}: SignInDto): Promise<Dto<SignInResponse>> => {
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