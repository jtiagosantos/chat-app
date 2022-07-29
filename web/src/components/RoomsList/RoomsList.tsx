import { FC } from 'react';
import { X } from 'phosphor-react';

//types
import { RoomsListProps } from './types';

//styles
import * as S from './styles';
import { theme } from '@/styles/theme';

export const RoomsList: FC<RoomsListProps> = ({ onCloseRoomsList, rooms }) => {
  return (
    <S.Container>
      <X 
        size={30} 
        color={theme.colors.white}
        weight='duotone' 
        onClick={onCloseRoomsList}
      />
      <S.Title>My rooms</S.Title>
      <S.List>
        {rooms.map((room) => (
          <S.ListItem key={room.id}>
            <S.RoomName>{room.name}</S.RoomName>
            <S.RoomCode>{room.code}</S.RoomCode>
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
}