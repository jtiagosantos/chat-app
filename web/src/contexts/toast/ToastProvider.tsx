import { 
  FC, 
  PropsWithChildren, 
  useState, 
  useMemo, 
  useCallback, 
  useEffect 
} from 'react';

//contexts
import { ToastStateContext, ToastDispatchContext } from './toastContext';

//types
import { OpenToastData, MessageType } from './types';

export const ToastProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const ToastStateProvider = ToastStateContext.Provider;
  const ToastDispatchProvider = ToastDispatchContext.Provider;

  const [messageType, setMessageType] = useState<MessageType>('success');
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenToast = useCallback((data: OpenToastData) => {
    setMessageType(data.messageType);
    setMessage(data.message);
    setIsOpen(true);
  }, [
    setMessageType,
    setMessage,
    setIsOpen,
  ]);

  const handleCloseToast = useCallback(() => {
    setIsOpen(false);
  }, [
    setIsOpen,
  ]);

  const toastState = useMemo(() => ({
    messageType,
    message,
    isOpen
  }), [
    messageType,
    message,
    isOpen,
  ]);

  const toastDispatch = useMemo(() => ({
    openToast: handleOpenToast,
    closeToast: handleCloseToast,
  }), [
    handleOpenToast,
    handleCloseToast,
  ]);

  useEffect(() => {
    let id: NodeJS.Timeout;

    if (isOpen) {
      id = setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }

    return () => clearTimeout(id);
  }, [
    isOpen,
  ]);

  return (
    <ToastDispatchProvider value={toastDispatch}>
      <ToastStateProvider value={toastState}>
        {children}
      </ToastStateProvider>
    </ToastDispatchProvider>
  );
}