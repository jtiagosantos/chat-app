import { 
  CheckCircle, 
  WarningCircle, 
  Info,
  Warning
} from 'phosphor-react';
import { useTransition } from 'react-spring';

//hooks
import { useToastState, useToastDispatch } from '@/hooks';

//styles
import { theme } from '@/styles/theme';
import { Container, CloseToastIcon } from './styles';

export const Toast = () => {
  const { messageType, message, isOpen } = useToastState();
  const { closeToast } = useToastDispatch();

  const toastTransition = useTransition(isOpen, {
    from: { x: 150, y: 0, opacity: 0.1 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 420, y: 0, opacity: 0.1 }  
  });

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