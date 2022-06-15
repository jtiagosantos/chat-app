import { FC, PropsWithChildren, useState, useMemo, useCallback } from 'react';

//contexts
import { UserDialogStateContext, UserDialogDispatchContext } from './userDialogContext';

//types
import { User } from './types';

export const UserDialogProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const UserDialogStateProvider = UserDialogStateContext.Provider;
  const UserDialogDispatchProvider = UserDialogDispatchContext.Provider;

  const [user, setUser] = useState<User>({ name: '', profileImage: '' });
  const [isOpenedDialog, setIsOpenedDialog] = useState(false);

  const openDialog = useCallback(() => {
    setIsOpenedDialog(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsOpenedDialog(false);
  }, []);

  const setUserData = useCallback((data: User) => {
    setUser(data);
  }, []);

  const userDialogState = useMemo(() => ({
    user,
    isOpenedDialog,
  }), [
    user, 
    isOpenedDialog,
  ]);

  const userDialogDispatch = useMemo(() => ({
    openDialog,
    closeDialog,
    setUserData,
  }), [
    openDialog,
    closeDialog,
    setUserData,
  ]);

  return (
    <UserDialogDispatchProvider value={userDialogDispatch}>
      <UserDialogStateProvider value={userDialogState}>
        {children}
      </UserDialogStateProvider>
    </UserDialogDispatchProvider>
  );
}