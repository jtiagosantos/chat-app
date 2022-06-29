import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

//layouts
import { Main } from '@/layouts';

//components
import { ButtonGroup, CreateRoomForm, EnterRoomForm } from './components';

//hooks
import { useAuthValidation } from '@/hooks';

//types
import { SelectedForm } from './types';

//styles
import { Wrapper } from './styles';
import { theme } from '@/styles/theme';
import { CloseFormButton } from '@/styles/components/CloseFormButton';

export const Room = () => {
  const [selectedForm, setSelectedForm] = useState<SelectedForm>('');
  const [isOpening, setIsOpening] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const isFirstRendering = useRef(true);

  const navigate = useNavigate();
  const { isUserAuthenticated } = useAuthValidation();

  const openForm = () => {
    setIsOpening(true);
    setIsClosing(false);
  }

  const openCreateRoomForm = () => {
    openForm();
    setSelectedForm('createRoom');
  }

  const openEnterRoomForm = () => {
    openForm();
    setSelectedForm('enterRoom');
  }

  const closeForm = () => {
    setIsOpening(false);
    setIsClosing(true);
    
    const id = setTimeout(() => {
      setSelectedForm('');
    }, 850);

    setTimeoutId(id);
  }

  const navigateToHomePage = useCallback(() => {
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    isFirstRendering.current = false;
  }, []);

  useEffect(() => {
    clearTimeout(timeoutId);
    setTimeoutId(undefined);
  }, [selectedForm]);

  useEffect(() => {
    if (!isUserAuthenticated) {
      navigateToHomePage();
    }
  }, [
    isUserAuthenticated,
    navigateToHomePage,
  ]);

  if (!selectedForm) {
    return (
      <Main>
        {isOpening && (
          <ButtonGroup 
            className={!isFirstRendering ? 'hiding-button-group' : ''}
            onOpenCreateRoomForm={openCreateRoomForm}
            onOpenEnterRoomForm={openEnterRoomForm}
          />
        )}

        {isClosing && (
          <ButtonGroup 
            className='showing-button-group'
            onOpenCreateRoomForm={openCreateRoomForm}
            onOpenEnterRoomForm={openEnterRoomForm}
          />
        )}
      </Main>
    );
  }

  return (
    <Main>
      <Wrapper>
        <CloseFormButton weight='light' onClick={closeForm} />

        {selectedForm === 'createRoom' && (
          <CreateRoomForm
            className={isOpening ? 'opening-form' : 'closing-form'} 
          />
        )}

        {selectedForm === 'enterRoom' && (
          <>
            {isOpening && <EnterRoomForm className='opening-form' />}
            {isClosing && <EnterRoomForm className='closing-form' />}
          </>
        )}
      </Wrapper>
    </Main>
  );
}