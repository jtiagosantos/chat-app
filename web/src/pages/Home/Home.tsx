import { useNavigate } from 'react-router-dom';

//styles
import { Container } from './styles';

export const Home = () => {
  const navigate = useNavigate();

  const navigateToCreateRoomPage = () => {
    navigate('/room/create');
  }

  const navigateToEnterRoomPage = () => {
    navigate('/room/enter');
  }

  return (
    <Container>
      <button 
        type="button" 
        onClick={navigateToCreateRoomPage}
      >
        Create a Room
      </button>
      <button 
        type="button" 
        onClick={navigateToEnterRoomPage}
      >
        Enter a Room
      </button>
    </Container>
  );
}