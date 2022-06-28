import { FC } from 'react';
import { Copy } from 'phosphor-react';

//components
import { Button } from '@/components';

//types
import { CodeDialogProps } from './types';

//styles
import { Container } from './styles';

export const CodeDialog: FC<CodeDialogProps> = ({ code }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  }

  return (
    <Container>
      <input defaultValue={code} readOnly />
      <Button
        width="100%"
        height="2.5rem"
        marginTop="1rem"
        icon={<Copy size={18} />}
        onClick={copyToClipboard}
      >
        Copy code
      </Button>
    </Container>
  );
}