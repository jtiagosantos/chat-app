import { FormEvent, useRef, useState } from 'react';

//components
import { Button } from '../../components/Button/Button';
import { Modal } from '../../components/Modal/Modal';
import { 
  RoomCodeModalContents 
} from './components/RoomCodeModalContents/RoomCodeModalContents';

//api services
import { RoomService } from '../../services/room.service';

//types
import { ModalHandler } from '../../components/Modal/types';

//styles
import { Container } from './styles';

export const CreateRoom = () => {
  const modalRef = useRef<ModalHandler>(null);

  const [roomName, setRoomName] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [isCreatingRoom, setIsCreatingRoom] = useState(false);

  const openModal = () => {
    modalRef.current?.open();
  }

  const closeModal = () => {
    modalRef.current?.close();
  }

  const handleCreateNewRoom = async (event: FormEvent) => {
    event.preventDefault();

    setIsCreatingRoom(true);

    if (!roomName) {
      alert('Room name is required.');
      setIsCreatingRoom(false);
      return;
    }

    const { data, error } = await RoomService.createRoom(roomName);

    if (!data) {
      alert(error);
      setIsCreatingRoom(false);
      return;
    }

    const { code } = data;

    setIsCreatingRoom(false);
    setRoomCode(code);

    openModal();
    
    setRoomName('');
  }

  return (
    <>
      <Container>
        <form onSubmit={handleCreateNewRoom}>
          <input 
            type="text" 
            placeholder="Insert the room name" 
            value={roomName}
            onChange={
              ({ target }) => setRoomName(target.value)
            }
          />
          <Button 
            type="submit"
            width="18.75rem"
            height="3rem"
            loading={isCreatingRoom}
          >
            Create room
          </Button>
        </form>
      </Container>

      <Modal ref={modalRef}>
        <RoomCodeModalContents 
          roomCode={roomCode} 
          onCloseModal={closeModal}
        />
      </Modal>
    </>
  );
}