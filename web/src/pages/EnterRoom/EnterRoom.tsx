import { FormEvent, useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

//components
import { Button } from '../../components/Button/Button';
import { Form } from '../../components/Form';

//api services
import { RoomService } from '../../services/room.service';

//constants
import { constants } from '../../constants';

//styles
import { Container } from './styles';

export const EnterRoom = () => {
  const navigate = useNavigate();
  const { USER_IMAGE } = constants;

  const [usernameInput, setUsernameInput] = useState<string>('');
  const [profilePhotoURLInput, setProfilePhotoURLInput] = useState<string>('');
  const [roomCode, setRoomCode] = useState<string>('');
  
  const navigateToChatPage = () => {
    navigate({
      pathname: '/chat',
      search: createSearchParams({
        username: usernameInput,
        profile_photo: profilePhotoURLInput,
        room_code: roomCode,
      }).toString(),
    })
  }

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    if (!usernameInput) {
      alert('username is required');
      return;
    }

    if (!profilePhotoURLInput) {
      alert('profile photo URL is required');
      return;
    }

    if (!roomCode) {
      alert('room code is required');
      return;
    }

    const { data, error } = await RoomService.findUniqueRoomByCode(roomCode);

    if (!data) {
      alert(error);
      return;
    }

    navigateToChatPage();
  }

  return (
    <Container>
      <div>
        <img src={profilePhotoURLInput || USER_IMAGE.DEFAULT} alt="not found" />
      </div>

      <Form 
        width="18.75rem"
        marginTop="20px"
        onSubmit={handleSubmitForm}
      >
        <input 
          type="text" 
          placeholder="Insert your username" 
          value={usernameInput}
          onChange={
            ({ target }) => setUsernameInput(target.value)
          }
        />
        <input 
          type="text" 
          placeholder="Insert your profile photo URL" 
          value={profilePhotoURLInput}
          onChange={
            ({ target }) => setProfilePhotoURLInput(target.value)
          }
        />
        <input 
          type="text" 
          placeholder="Insert the room code" 
          value={roomCode}
          onChange={
            ({ target }) => setRoomCode(target.value)
          }
        />
        <Button 
          type="submit"
          width="100%"
          height="3rem"
        >
          Enter Room
        </Button>
      </Form>
    </Container>
  );
}