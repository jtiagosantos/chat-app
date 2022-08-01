import { FC, useState } from 'react';
import { X, ArrowBendUpLeft, Copy, ShareNetwork } from 'phosphor-react';

//hooks
import { useToastDispatch, useWebShare } from '@/hooks';

//types
import { RoomsListProps, Room } from './types';

//styles
import * as S from './styles';
import { theme } from '@/styles/theme';

export const RoomsList: FC<RoomsListProps> = ({ onCloseRoomsList, rooms }) => {
  const { openToast } = useToastDispatch();
  const { share } = useWebShare();

  const [selectedRoom, setSelectedRoom] = useState<Room | undefined>(undefined);

  const handleCopyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(selectedRoom?.code!);
    openToast({
      messageType: 'info',
      message: 'Room code copied to clipboard',
    });
  }

  const handleShareRoomCode = async () => {
    await share({
      title: 'Room code',
      text: selectedRoom?.code,
    });
  }

  return (
    <S.Container>
      <X 
        size={30} 
        color={theme.colors.lightgray}
        weight='duotone' 
        onClick={onCloseRoomsList}
      />
      <S.Title>My rooms</S.Title>
      {!selectedRoom ? (
        !!rooms.length ? (
          <S.List>
            {rooms.map((room) => (
              <S.ListItem 
                key={room.id} 
                onClick={() => setSelectedRoom(room)}
              >
                <S.RoomName>{room.name}</S.RoomName>
                <S.RoomCode>{room.code}</S.RoomCode>
              </S.ListItem>
            ))}
          </S.List>
        ) : (
          <h2>Create a room to list it here!</h2>
        )
      ) : (
        <>
          <S.RoomData>
            <S.RoomName>{selectedRoom.name}</S.RoomName>
            <S.RoomCode>{selectedRoom.code}</S.RoomCode>
          </S.RoomData>
          <S.Actions>
            <ArrowBendUpLeft 
              size={50} 
              color={theme.colors.white}
              weight='duotone' 
              onClick={() => setSelectedRoom(undefined)}
            />
            <Copy 
              size={60} 
              color={theme.colors.white}
              weight='duotone' 
              onClick={handleCopyRoomCodeToClipboard}
            />
            <ShareNetwork 
              size={60} 
              color={theme.colors.white}
              weight='duotone' 
              onClick={handleShareRoomCode}
            />
          </S.Actions>
        </>
      )}
    </S.Container>
  );
}