import { 
  CheckCircle, 
  WarningCircle, 
  Info,
  Warning
} from 'phosphor-react';

//hooks
import { useToastState, useToastDispatch, useTransition } from '@/hooks';

//constants
import { TOAST_ANIMATION_STYLES } from '@/constants';

//styles
import { theme } from '@/styles/theme';
import { Container, CloseToastIcon } from './styles';

export const Toast = () => {
  const { messageType, message, isOpen } = useToastState();
  const { closeToast } = useToastDispatch();

  const toastTransition = useTransition(isOpen, TOAST_ANIMATION_STYLES);

  return (
    <>
      {toastTransition((style, item) => (
        item && (
          <Container messagetype={messageType} style={style}>
            {messageType === 'success' && (
              <CheckCircle 
                weight='bold' 
                size={25} 
                color={theme.colors.white} 
              />
            )}
      
            {messageType === 'error' && (
              <WarningCircle 
                weight='bold' 
                size={25} 
                color={theme.colors.white} 
              />
            )}
      
            {messageType === 'info' && (
              <Info 
                weight='bold' 
                size={25} 
                color={theme.colors.white} 
              />
            )}
            
            {messageType === 'warning' && (
              <Warning 
                weight='bold' 
                size={25} 
                color={theme.colors.white} 
              />
            )}

            <p>{message}</p>

            <CloseToastIcon 
              weight='bold' 
              size={18}
              color={theme.colors.white} 
              onClick={closeToast}
            />
          </Container>
        )
      ))}
    </>
  );
}