import { useState, PropsWithChildren, FC } from 'react';
import { createContext } from 'use-context-selector';

interface User {
  profileImage: string;
  name: string;
}

interface UserDialogContextData {
  isOpenDialog: boolean;
  onOpenDialog: () => void;
  onCloseDialog: () => void;
  user: User;
  setUserData: (data: User) => void;
}

export const UserDialogContext = createContext<UserDialogContextData>(
  {} as UserDialogContextData,
);

export const UserDialogContextProvider: FC<PropsWithChildren<unknown>> = ({ 
  children 
}) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [user, setUser] = useState<User>({
    name: '',
    profileImage: '',
  });

  const onOpenDialog = () => setIsOpenDialog(true);

  const onCloseDialog = () => setIsOpenDialog(false);

  const setUserData = (data: User) => {
    setUser(data);
  }

  return (
    <UserDialogContext.Provider value={{
      isOpenDialog,
      user,
      onCloseDialog,
      onOpenDialog,
      setUserData
    }}>
      {children}
    </UserDialogContext.Provider>
  );
}