import { FC } from 'react';
import { Copy, ShareNetwork } from 'phosphor-react';

//components
import { Button } from '@/components';

//hooks
import { useToastDispatch, useWebShare } from '@/hooks';

//types
import { CodeDialogProps } from './types';

//styles
import { Container } from './styles';

export const ShareCode: FC<CodeDialogProps> = ({ code }) => {
  const { openToast } = useToastDispatch();
  const { share } = useWebShare();

  const handleCopyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
    openToast({
      messageType: 'info',
      message: 'Room code copied to clipboard',
    });
  }

  const handleShareRoomCode = async () => {
    await share({
      title: 'Room code',
      url: code,
    });
  }

  return (
    <Container>
      <input defaultValue={code} readOnly />
      <Button
        width="100%"
        height="2.5rem"
        marginTop="1rem"
        icon={<Copy size={18} />}
        onClick={handleCopyRoomCodeToClipboard}
      >
        Copy code
      </Button>
      <Button
        width="100%"
        height="2.5rem"
        marginTop="1rem"
        icon={<ShareNetwork size={18} />}
        onClick={handleShareRoomCode}
      >
        Share code
      </Button>
    </Container>
  );
}