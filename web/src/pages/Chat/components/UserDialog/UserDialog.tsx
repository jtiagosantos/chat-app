import { X } from 'phosphor-react';

//hooks
import { useUserDialog } from '../../../../hooks/useUserDialog';

//styles
import { Container } from './styles';

export const UserDialog = () => {
  const { user, onCloseDialog, isOpenDialog } = useUserDialog();

  const { name, profileImage } = user;

  if (isOpenDialog) {
    return (
      <Container>
        <div>
          <X 
            size={20} 
            weight='bold' 
            color='#ffffff' 
            onClick={onCloseDialog} 
          />
        </div>
        <img src={profileImage} alt={name} />
        <h1>{name}</h1>
      </Container>
    );
  }

  return null;
}