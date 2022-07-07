import { createContext } from 'use-context-selector';

//types
import { ToastStateContextData, ToastDispatchContextData } from './types';

export const ToastStateContext = createContext(
  {} as ToastStateContextData
);

export const ToastDispatchContext = createContext(
  {} as ToastDispatchContextData
);