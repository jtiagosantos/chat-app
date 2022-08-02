import { createContext } from 'use-context-selector';

//types
import { RoomsByUserStateContextData, RoomsByUserDispatchContextData } from './types';

export const RoomsByUserStateContext = createContext(
  {} as RoomsByUserStateContextData
);

export const RoomsByUserDispatchContext = createContext(
  {} as RoomsByUserDispatchContextData
);