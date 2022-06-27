import { useContext } from 'use-context-selector';

//contexts
import { 
  UserDialogStateContext
} from '@/contexts/userDialog/userDialogContext';

export const useUserDialogState = () => useContext(UserDialogStateContext);
