import { FormEvent, useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

//constants
import { constans } from '../../constants';

//styles
import { Container } from './styles';

export const Home = () => {
  const navigate = useNavigate();
  const { defaultImageUrl } = constans;

  const [usernameInput, setUsernameInput] = useState<string>('');
  const [profilePhotoURLInput, setProfilePhotoURLInput] = useState<string>('');
  
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

    if (!profilePhotoURLInput) {
      alert('profile photo URL is required');
      return;
    }

    if (!usernameInput) {
      alert('username field is required');
      return;
    }

    navigateToChatPage();
  }

  return (
    <Container>
      <div>
        <img src={profilePhotoURLInput || defaultImageUrl} alt="not found" />
      </div>

      <form onSubmit={handleSubmitForm}>
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
          placeholder="Insert your username" 
          value={usernameInput}
          onChange={
            ({ target }) => setUsernameInput(target.value)
          }
        />
        <button type="submit">Enter on chat</button>
      </form>
    </Container>
  );
}