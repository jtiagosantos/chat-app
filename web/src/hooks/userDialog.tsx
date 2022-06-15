import { useContext } from 'use-context-selector';

//contexts
import { 
  UserDialogStateContext, 
  UserDialogDispatchContext 
} from '@/contexts/userDialog/userDialogContext';

export const useUserDialogState = 
  () => useContext(UserDialogStateContext);

export const useUserDialogDispatch = 
  () => useContext(UserDialogDispatchContext);