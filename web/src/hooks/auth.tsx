import { useContext } from 'use-context-selector';

//contexts
import {
  AuthStateContext,
  AuthDispatchContext
} from '@/contexts/auth/authContext';

export const useAuthState = 
  () => useContext(AuthStateContext);

export const useAuthDispatch = 
  () => useContext(AuthDispatchContext);