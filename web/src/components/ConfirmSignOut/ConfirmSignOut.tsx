import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle, CheckCircle } from 'phosphor-react';

//hooks
import { useAuthDispatch } from '@/hooks';

//types
import { ConfirmSignOutProps } from './types';

//styles
import { Container, Actions } from './styles';
import { theme } from '@/styles/theme';

export const ConfirmSignOut: FC<ConfirmSignOutProps> = ({ 
  onCloseConfirmSignOut,
}) => {
  const { signOut } = useAuthDispatch();
  const navigate = useNavigate();

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
          color={theme.colors.lightgreen} 
          weight='regular' 
          onClick={onCloseConfirmSignOut}
        />
        <CheckCircle 
          size={80} 
          color={theme.colors.crimson} 
          weight='regular' 
          onClick={handleSignOut} 
        />
      </Actions>
    </Container>
  );
}