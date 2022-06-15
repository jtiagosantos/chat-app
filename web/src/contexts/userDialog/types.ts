export interface User {
  profileImage: string;
  name: string;
}

export interface UserDialogStateContextData {
  user: User;
  isOpenedDialog: boolean;
}

export interface UserDialogDispatchContextData {
  openDialog: () => void;
  closeDialog: () => void;
  setUserData: (data: User) => void;
}