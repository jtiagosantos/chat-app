import JWTDecoder from 'jwt-decode';

//contants
import { USER_ID_STORAGE_KEY, TOKEN_STORAGE_KEY, ONE_SECOND } from '@/constants';

//types
import { TokenData } from './types';

export const useAuthValidation = () => {
  const id = localStorage.getItem(USER_ID_STORAGE_KEY);
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);

  if (!id || !token) {
    return { isUserAuthenticated: false };
  }

  const { exp, userId } = JWTDecoder<TokenData>(token);

  if (id !== String(userId)) {
    return { isUserAuthenticated: false };
  }
  
  const expireTokenTime = exp * ONE_SECOND;
  const dateNow = new Date();
  const currentTime = dateNow.getTime();

  if (expireTokenTime < currentTime) {
    return { isUserAuthenticated: false };
  }

  return { isUserAuthenticated: true };
}