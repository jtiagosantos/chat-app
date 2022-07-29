import { 
  FC, 
  PropsWithChildren, 
  useState, 
  useMemo, 
  useCallback, 
} from 'react';

//services
import { fetchRoomsByUserService } from '@/services';

//contexts
import { RoomsByUserStateContext, RoomsByUserDispatchContext } from './roomsByUserContext';

//types
import { Room } from './types';

export const RoomsByUserProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const RoomsByUserStateProvider = RoomsByUserStateContext.Provider;
  const RoomsByUserDispatchProvider = RoomsByUserDispatchContext.Provider;

  const [rooms, setRooms] = useState<Array<Room>>([]);

  const handleFetchRooms = useCallback(async () => {
    const response = await fetchRoomsByUserService();

    if (response) {
      setRooms(response);
    }
  }, [

  ]);

  const roomsByUserState = useMemo(() => ({
    rooms,
  }), [
    rooms,
  ]);

  const roomsByUserDispatch = useMemo(() => ({
    fetchRooms: handleFetchRooms,
  }), [
    handleFetchRooms,
  ]);

  return (
    <RoomsByUserDispatchProvider value={roomsByUserDispatch}>
      <RoomsByUserStateProvider value={roomsByUserState}>
        {children}
      </RoomsByUserStateProvider>
    </RoomsByUserDispatchProvider>
  );
}