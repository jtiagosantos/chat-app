import { useContext } from 'use-context-selector';

//contexts
import { RoomsByUserStateContext } from '@/contexts/roomsByUser/roomsByUserContext';

export const useRoomsByUserState = () => useContext(RoomsByUserStateContext);