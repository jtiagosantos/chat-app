import { FormEvent, useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';

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
      }).toString(),
    })
  }

  const handleSubmitForm = (event: FormEvent) => {
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

    navigateToChatPage();
  }

  return (
    <Container>
      <div>
        <img src={profilePhotoURLInput || USER_IMAGE.DEFAULT} alt="not found" />
      </div>

      <form onSubmit={handleSubmitForm}>
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
        <Button type="submit">Enter on chat</Button>
      </form>
    </Container>
  );
}