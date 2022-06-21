import { useEffect, useRef, useState } from 'react';

//layouts
import { Main } from '@/layouts';

//components
import { ButtonGroup, CreateRoomForm, EnterRoomForm } from './components';

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

  useEffect(() => {
    isFirstRendering.current = false;
  }, []);

  useEffect(() => {
    clearTimeout(timeoutId);
    setTimeoutId(undefined);
  }, [selectedForm]);

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
          <>
            {isOpening && <CreateRoomForm className='opening-form' />}
            {isClosing && <CreateRoomForm className='closing-form' />}
          </>
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