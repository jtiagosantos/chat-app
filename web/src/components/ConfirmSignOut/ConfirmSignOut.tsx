import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle, CheckCircle } from 'phosphor-react';

//hooks
import { useAuthDispatch, useTheme } from '@/hooks';

//types
import { ConfirmSignOutProps } from './types';

//styles
import { Container, Actions } from './styles';

export const ConfirmSignOut: FC<ConfirmSignOutProps> = ({ 
  onCloseConfirmSignOut,
}) => {
  const { signOut } = useAuthDispatch();
  const navigate = useNavigate();
  const { colors } = useTheme();

  const navigateToHomePage = () => {
    navigate('/');
  }

  const handleSignOut = () => {
    onCloseConfirmSignOut();
    signOut();
    navigateToHomePage();
  }

  return (
    <Container>
      <h1>Do you really want to leave?</h1>

      <Actions> 
        <XCircle 
          size={80} 
          color={colors.mediumslateblue} 
          weight='regular' 
          onClick={onCloseConfirmSignOut}
        />
        <CheckCircle 
          size={80} 
          color={colors.mediumslateblue} 
          weight='regular' 
          onClick={handleSignOut} 
        />
      </Actions>
    </Container>
  );
}