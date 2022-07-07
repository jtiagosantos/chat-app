import { 
  CheckCircle, 
  WarningCircle, 
  Info,
  Warning
} from 'phosphor-react';

//styles
import { theme } from '@/styles/theme';
import { Container, CloseToastIcon } from './styles';

export const Toast = () => {
  const messageType = 'warning';

  return (
    <Container messageType={messageType}>
      {/* {messageType === 'success' && (
        <CheckCircle 
          weight='bold' 
          size={25} 
          color={theme.colors.white} 
        />
      )} */}

      {/* {messageType === 'error' && (
        <WarningCircle 
          weight='bold' 
          size={25} 
          color={theme.colors.white} 
        />
      )} */}

      {/* {messageType === 'info' && (
        <Info 
          weight='bold' 
          size={25} 
          color={theme.colors.white} 
        />
      )} */}
      
      {messageType === 'warning' && (
        <Warning 
          weight='bold' 
          size={25} 
          color={theme.colors.white} 
        />
      )}
      <p>Success message.</p>
      <CloseToastIcon 
        weight='bold' 
        size={18}
        color={theme.colors.white} 
      />
    </Container>
  );
}