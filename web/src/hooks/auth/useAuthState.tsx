import { useContext } from 'use-context-selector';

//contexts
import { AuthStateContext } from '@/contexts/auth/authContext';

export const useAuthState = () => useContext(AuthStateContext);