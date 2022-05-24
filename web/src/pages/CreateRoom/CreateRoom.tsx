import { FormEvent, useState } from 'react';

//components
import { Button } from '../../components/Button/Button';

//styles
import { Container } from './styles';

export const CreateRoom = () => {
  const [roomName, setRoomName] = useState('');

  const handleCreateNewRoom = (event: FormEvent) => {
    event.preventDefault();

    if (!roomName) {
      alert('Room name is required.');
      return;
    }
  }

  return (
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
        <Button type="submit">Enter on chat</Button>
      </form>
    </Container>
  );
}