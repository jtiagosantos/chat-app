import { createContext } from 'use-context-selector';

//types
import { UserDialogStateContextData, UserDialogDispatchContextData } from './types';

export const UserDialogStateContext = createContext(
  {} as UserDialogStateContextData
);

export const UserDialogDispatchContext = createContext(
  {} as UserDialogDispatchContextData
);