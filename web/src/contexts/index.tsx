import { FC, PropsWithChildren } from 'react';

//contexts
import { UserDialogContextProvider } from '../contexts/userDialog';

export const ContextProvider: FC<PropsWithChildren<unknown>> = ({ 
  children 
}) => {
  return (
    <UserDialogContextProvider>
      {children}
    </UserDialogContextProvider>
  );
}