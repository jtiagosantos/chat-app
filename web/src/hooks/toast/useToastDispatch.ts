import { useContext } from 'use-context-selector';

//contexts
import { ToastDispatchContext } from '@/contexts/toast/toastContext';

export const useToastDispatch = () => useContext(ToastDispatchContext);