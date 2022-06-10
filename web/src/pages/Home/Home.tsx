import { useNavigate } from 'react-router-dom';

//components
import { Button } from '@/components';

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
        width="18.75rem"
        height="3rem"
        onClick={navigateToCreateRoomPage}
      >
        Create a Room
      </Button>
      <Button 
        type="button" 
        width="18.75rem"
        height="3rem"
        onClick={navigateToEnterRoomPage}
      >
        Enter a Room
      </Button>
    </Container>
  );
}