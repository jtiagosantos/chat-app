import { useNavigate } from 'react-router-dom';

//components
import { Button } from '@/components';

//images
import banner from '@/images/banner.svg';

//styles
import * as S from './styles';

export const Home = () => {
  const navigate = useNavigate();

  const navigateToCreateRoomPage = () => {
    navigate('/room/create');
  }

  const navigateToEnterRoomPage = () => {
    navigate('/room/enter');
  }

  return (
    <S.Container>
      <S.ButtonGroup>
        <Button 
          type="button" 
          width="100%"
          height="3rem"
          onClick={navigateToCreateRoomPage}
        >
          Create a Room
        </Button>
        <Button 
          type="button" 
          width="100%"
          height="3rem"
          onClick={navigateToEnterRoomPage}
        >
          Enter a Room
        </Button>
      </S.ButtonGroup>
      <S.ImageWrapper>
        <img src={banner} alt="" />
      </S.ImageWrapper>
    </S.Container>
  );
}