import { useContext } from 'use-context-selector';

//contexts
import { ToastStateContext } from '@/contexts/toast/toastContext';

export const useToastState = () => useContext(ToastStateContext);