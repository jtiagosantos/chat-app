import { useContext } from 'use-context-selector';

//contexts
import { AuthDispatchContext } from '@/contexts/auth/authContext';

export const useAuthDispatch = () => useContext(AuthDispatchContext);