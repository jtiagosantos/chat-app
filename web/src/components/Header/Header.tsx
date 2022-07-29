import { FC, useRef } from 'react';
import { PencilSimple, SignOut, Book } from 'phosphor-react';

//hooks
import { useRoomsByUserState } from '@/hooks';

//components
import { Modal, ConfirmSignOut, RoomsList, SpinnerLoading } from '@/components';

//types
import { HeaderProps } from './types';
import { ModalHandler } from '../Modal/types';

//styles
import { theme } from '@/styles/theme';
import * as S from './styles';

export const Header: FC<HeaderProps> = ({ profileImage, username, onlineUsersNumber }) => {
  const { rooms, isLoading } = useRoomsByUserState();
  
  const confirmSingOutModalRef = useRef<ModalHandler>(null);
  const roomsListModalRef = useRef<ModalHandler>(null);

  const openConfirmSignOut = () => confirmSingOutModalRef.current?.open();
  const closeConfirmSignOut = () => confirmSingOutModalRef.current?.close();

  const openRoomsList = () => roomsListModalRef.current?.open();
  const closeRoomsList = () => roomsListModalRef.current?.close();

  return (
    <>
      <S.Container>
        <S.Profile>
          <img src={profileImage} alt='' />
          <h1>{username}</h1>
          <PencilSimple size={18} color={theme.colors.white} weight='regular' />
          {!isLoading ? (
            <Book 
              size={18} 
              color={theme.colors.white} 
              weight='regular' 
              onClick={openRoomsList}
            />
          ) : (
            <SpinnerLoading 
              size={15}
              borderSize={1}
              primaryColor={theme.colors.white}
              secondaryColor={theme.colors.mediumslateblue}
            />
          )}
        </S.Profile>
        <S.Wrapper>
          {!!onlineUsersNumber && (
            <S.Online>
              <span />
              <h2>{onlineUsersNumber}{' online'}</h2>
            </S.Online>
          )}
          <SignOut 
            size={22} 
            color={theme.colors.white} 
            weight='bold' 
            onClick={openConfirmSignOut}
          />
        </S.Wrapper>
      </S.Container>
      
      <Modal ref={confirmSingOutModalRef}>
        <ConfirmSignOut onCloseConfirmSignOut={closeConfirmSignOut} />
      </Modal>

      <Modal ref={roomsListModalRef}>
        <RoomsList rooms={rooms} onCloseRoomsList={closeRoomsList} />
      </Modal>
    </>
  );
}