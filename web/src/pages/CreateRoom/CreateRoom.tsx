import { FormEvent, useRef, useState } from 'react';

//components
import { Button } from '@/components';
import { Modal } from '@/components';
import { Form } from '@/components';
import { Input } from '@/components';
import { RoomCodeModalContents } from './components';

//api services
import { RoomService } from '@/services/room.service';

//types
import { ModalHandler } from '@/components/Modal/types';

//styles
import { Container } from './styles';
import { theme } from '@/styles/theme';

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
        <Form 
          width="18.75rem"
          onSubmit={handleCreateNewRoom}
        >
          <Input 
            type="text" 
            width="100%"
            height="2.5rem"
            fontSize="0.875rem"
            textColor={theme.colors.manatee}
            placeholderColor={theme.colors.manatee}
            padding="0.5rem 0.625rem"
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
        </Form>
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