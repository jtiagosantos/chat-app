import { useEffect, useState } from 'react';

//layouts
import { Main } from '@/layouts';

//components
import { ButtonGroup, CreateRoomForm, EnterRoomForm } from './components';

//hooks
import { useAnimatedTransition } from '@/hooks';

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

  const formTransition = useAnimatedTransition(isOpenForm);

  const buttonGroupTransition = useAnimatedTransition(
    isOpenButtonGroup,
    isFirstRendering,
  );

  const openForm = (form: SelectedForm) => {
    setIsOpenButtonGroup(false);
    setIsOpenForm(false);
    
    const id = setTimeout(() => {
      setIsOpenForm(true);
      setSelectedForm(form);
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
              onOpenCreateRoomForm={() => openForm('createRoom')}
              onOpenEnterRoomForm={() => openForm('enterRoom')}
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