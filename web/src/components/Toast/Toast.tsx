import { 
  CheckCircle, 
  WarningCircle, 
  Info,
  Warning
} from 'phosphor-react';

//hooks
import { 
  useToastState, 
  useToastDispatch, 
  useTransition, 
  useTheme,
} from '@/hooks';

//constants
import { TOAST_ANIMATION_STYLES } from '@/constants';

//styles
import { Container, CloseToastIcon } from './styles';

export const Toast = () => {
  const { messageType, message, isOpen } = useToastState();
  const { closeToast } = useToastDispatch();
  const { colors } = useTheme();

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
                color={colors.white} 
              />
            )}
      
            {messageType === 'error' && (
              <WarningCircle 
                weight='bold' 
                size={25} 
                color={colors.white} 
              />
            )}
      
            {messageType === 'info' && (
              <Info 
                weight='bold' 
                size={25} 
                color={colors.white} 
              />
            )}
            
            {messageType === 'warning' && (
              <Warning 
                weight='bold' 
                size={25} 
                color={colors.white} 
              />
            )}

            <p>{message}</p>

            <CloseToastIcon 
              weight='bold' 
              size={18}
              color={colors.white} 
              onClick={closeToast}
            />
          </Container>
        )
      ))}
    </>
  );
}