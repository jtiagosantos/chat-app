import { FC } from 'react';
import { Copy } from 'phosphor-react';

//components
import { Button } from '@/components';

//hooks
import { useToastDispatch } from '@/hooks';

//types
import { CodeDialogProps } from './types';

//styles
import { Container } from './styles';

export const CodeDialog: FC<CodeDialogProps> = ({ code }) => {
  const { openToast } = useToastDispatch();

  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
    openToast({
      messageType: 'info',
      message: 'Room code copied to clipboard',
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
        onClick={copyRoomCodeToClipboard}
      >
        Copy code
      </Button>
    </Container>
  );
}