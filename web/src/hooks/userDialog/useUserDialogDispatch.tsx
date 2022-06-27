import { useContext } from 'use-context-selector';

//contexts
import { 
  UserDialogDispatchContext 
} from '@/contexts/userDialog/userDialogContext';

export const useUserDialogDispatch = () => useContext(UserDialogDispatchContext);