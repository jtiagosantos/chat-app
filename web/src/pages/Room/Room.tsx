import { useEffect, useState } from 'react';
import { useTransition } from 'react-spring';

//layouts
import { Main } from '@/layouts';

//components
import { ButtonGroup, CreateRoomForm, EnterRoomForm } from './components';

//types
import { SelectedForm } from './types';

//styles
import { Wrapper } from './styles';
import { CloseFormButton } from '@/styles/components/CloseFormButton';

export const Room = () => {
  const [selectedForm, setSelectedForm] = useState<SelectedForm>('');
  const [isOpenForm, setIsOpenForm] = useState(true);
  const [isOpenButtonGroup, setIsOpenButtonGroup] = useState(true);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const [isFirstRendering, setIsFirstRendering] = useState(true);

  const formTransition = useTransition(isOpenForm, {
    from: { x: 0, y: 180, opacity: 0.3 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: 180, opacity: 0.3 },
  });

  const buttonGroupTransition = useTransition(isOpenButtonGroup, {
    from: isFirstRendering ? {} : { x: 0, y: 180, opacity: 0.3 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: 180, opacity: 0.3 },
  });

  const openCreateRoomForm = () => {
    setIsOpenButtonGroup(false);
    setIsOpenForm(false);
    
    const id = setTimeout(() => {
      setIsOpenForm(true);
      setSelectedForm('createRoom');
    }, 400);

    setTimeoutId(id);
  }

  const openEnterRoomForm = () => {
    setIsOpenButtonGroup(false);
    setIsOpenForm(false);
    
    const id = setTimeout(() => {
      setIsOpenForm(true);
      setSelectedForm('enterRoom');
    }, 400);

    setTimeoutId(id);
  }

  const closeForm = () => {
    setIsOpenForm(false);

    const id = setTimeout(() => {
      setIsOpenButtonGroup(true);
      setSelectedForm('');
    }, 400);

    setTimeoutId(id);
  }

  useEffect(() => {
    setIsFirstRendering(false);
  }, []);

  useEffect(() => {
    clearTimeout(timeoutId);
    setTimeoutId(undefined);
  }, [selectedForm]);

  if (!selectedForm) {
    return (
      <Main>
        {buttonGroupTransition((style, item) => (
          item && (
            <ButtonGroup 
              style={style}
              onOpenCreateRoomForm={openCreateRoomForm}
              onOpenEnterRoomForm={openEnterRoomForm}
            />
          )
        ))}
      </Main>
    );
  }

  return (
    <Main>
      <Wrapper>
        <CloseFormButton weight='light' onClick={closeForm} />

        {formTransition((style, item) => (
          (item && selectedForm === 'createRoom') && (
            <CreateRoomForm style={style} />
          )
        ))}

        {formTransition((style, item) => (
          (item && selectedForm === 'enterRoom') && (
            <EnterRoomForm style={style} />
          )
        ))}
      </Wrapper>
    </Main>
  );
}