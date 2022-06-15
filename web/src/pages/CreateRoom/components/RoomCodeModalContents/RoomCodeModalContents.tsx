import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy } from 'phosphor-react';

//components
import { Button } from '@/components';
import { Input } from '@/components';

//types
import { RoomCodeModalProps } from './types';

//styles
import { Container } from './styles';
import { theme } from '@/styles/theme';

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
      <Input 
        type="text" 
        width="100%"
        height="3rem"
        fontSize="1.3rem"
        textColor={theme.colors.manatee}
        padding="0.5rem 0.625rem"
        defaultValue={roomCode} 
        readOnly 
      />
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