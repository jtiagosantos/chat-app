import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

//layouts
import { Main } from '@/layouts';

//components
import { SignInForm, SignUpForm, ButtonGroup } from './components';

//hooks
import { useAuthValidation } from '@/hooks';

//types
import { SelectedForm } from './types';

//styles
import { Wrapper } from './styles';
import { theme } from '@/styles/theme';
import { CloseFormButton } from '@/styles/components/CloseFormButton';

export const Home = () => {
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

  const openSignInForm = () => {
    openForm();
    setSelectedForm('signIn');
  }

  const openSignUpForm = () => {
    openForm();
    setSelectedForm('signUp');
  }

  const closeForm = () => {
    setIsOpening(false);
    setIsClosing(true);
    
    const id = setTimeout(() => {
      setSelectedForm('');
    }, 850);

    setTimeoutId(id);
  }

  const navigateToRoomPage = useCallback(() => {
    navigate('/room');
  }, [navigate]);

  useEffect(() => {
    isFirstRendering.current = false;
  }, []);

  useEffect(() => {
    clearTimeout(timeoutId);
    setTimeoutId(undefined);
  }, [selectedForm]);

  useEffect(() => {
    if (isUserAuthenticated) {
      navigateToRoomPage();
    }
  }, [
    navigateToRoomPage,
    isUserAuthenticated, 
  ]);
  
  if (!selectedForm) {
    return (
      <Main>
        {isOpening && (
          <ButtonGroup 
            className={!isFirstRendering ? 'hiding-button-group' : ''}
            onOpenSignInForm={openSignInForm}
            onOpenSignUpForm={openSignUpForm}
          />
        )}

        {isClosing && (
          <ButtonGroup 
            className='showing-button-group'
            onOpenSignInForm={openSignInForm}
            onOpenSignUpForm={openSignUpForm}
          />
        )}

      </Main>
    );
  }

  return (
    <Main>
      <Wrapper>
        <CloseFormButton weight='light' onClick={closeForm} />

        {selectedForm === 'signIn' && (
          <>
            {isOpening && <SignInForm className='opening-form' />}
            {isClosing && <SignInForm className='closing-form' />}
          </>
        )}

        {selectedForm === 'signUp' && (
          <>
            {isOpening && <SignUpForm className='opening-form' />}
            {isClosing && <SignUpForm className='closing-form' />}
          </>
        )}
      </Wrapper>
    </Main>
  );
}