import JWTDecoder from 'jwt-decode';

//contants
import { constants } from '@/constants';

//types
import { TokenData } from './types';

export const useAuthValidation = () => {
  const id = localStorage.getItem('@ChatApp:id');
  const token = localStorage.getItem('@ChatApp:token');

  if (!id || !token) {
    return { isUserAuthenticated: false };
  }

  const { exp, userId } = JWTDecoder<TokenData>(token);

  if (id !== String(userId)) {
    return { isUserAuthenticated: false };
  }
  
  const expireTokenTime = exp * constants.ONE_SECOND;
  const dateNow = new Date();
  const currentTime = dateNow.getTime();

  if (expireTokenTime < currentTime) {
    return { isUserAuthenticated: false };
  }

  return { isUserAuthenticated: true };
}