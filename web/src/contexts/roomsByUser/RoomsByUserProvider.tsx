import { 
  FC, 
  PropsWithChildren, 
  useMemo, 
  useCallback, 
} from 'react';
import { useQuery } from 'react-query';

//services
import { fetchRoomsByUserService } from '@/services';

//contexts
import { RoomsByUserStateContext, RoomsByUserDispatchContext } from './roomsByUserContext';

export const RoomsByUserProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const RoomsByUserStateProvider = RoomsByUserStateContext.Provider;
  const RoomsByUserDispatchProvider = RoomsByUserDispatchContext.Provider;

  const { data, isLoading, refetch, isRefetching } = useQuery('rooms', fetchRoomsByUserService);

  const handleFetchRooms = useCallback(() => refetch(), [refetch]);

  const roomsByUserState = useMemo(() => ({
    rooms: data || [],
    isLoading: isLoading || isRefetching,
  }), [
    data,
    isLoading,
    isRefetching,
  ]);

  const roomsByUserDispatch = useMemo(() => ({
    refetchRooms: handleFetchRooms,
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