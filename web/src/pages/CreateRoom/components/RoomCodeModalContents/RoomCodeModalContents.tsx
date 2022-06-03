import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy } from 'phosphor-react';

//components
import { Button } from '../../../../components/Button/Button';

//types
import { RoomCodeModalProps } from './types';

//styles
import { Container } from './styles';

export const RoomCodeModalContents: FC<RoomCodeModalProps> = ({ 
  roomCode,
  onCloseModal,
}) => {
  const navigate = useNavigate();

  const navigateToEnterRoomPage = () => {
    navigate('/room/enter');
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomCode);
  }

  const handleCloseModal = () => {
    copyToClipboard();
    alert('room code was copied to your clipboard');
    onCloseModal();
    navigateToEnterRoomPage();
  }

  return (
    <Container>
      <h2>Your room code</h2>
      <input type="text" defaultValue={roomCode} readOnly />
      <Button 
        type="button"
        width="100%"
        height="3rem"
        marginTop="1rem"
        icon={<Copy size={20} weight="bold" />}
        onClick={handleCloseModal}
      >
        Copy to clipboard
      </Button>
    </Container>
  );
}