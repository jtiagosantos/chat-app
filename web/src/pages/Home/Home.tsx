import { useNavigate } from 'react-router-dom';

//components
import { Button } from '../../components/Button/Button';

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
      <Button 
        type="button" 
        onClick={navigateToCreateRoomPage}
      >
        Create a Room
      </Button>
      <Button 
        type="button" 
        onClick={navigateToEnterRoomPage}
      >
        Enter a Room
      </Button>
    </Container>
  );
}