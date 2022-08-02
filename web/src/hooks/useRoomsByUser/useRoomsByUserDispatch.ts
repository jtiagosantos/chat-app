import { useContext } from 'use-context-selector';

//contexts
import { RoomsByUserDispatchContext } from '@/contexts/roomsByUser/roomsByUserContext';

export const useRoomsByUserDispatch = () => useContext(RoomsByUserDispatchContext);