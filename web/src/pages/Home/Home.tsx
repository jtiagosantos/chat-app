import { useEffect, useRef, useState } from 'react';

//layouts
import { Main } from '@/layouts';

//components
import { SignInForm, SignUpForm, ButtonGroup } from './components';

//types
import { SelectedForm } from './types';

//styles
import * as S from './styles';
import { theme } from '@/styles/theme';

export const Home = () => {
  const [selectedForm, setSelectedForm] = useState<SelectedForm>('');
  const [isOpening, setIsOpening] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const isFirstRendering = useRef(true);

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
    
    setTimeout(() => {
      setSelectedForm('');
    }, 850);
  }

  useEffect(() => {
    isFirstRendering.current = false;
  }, []);
  
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
      <S.Wrapper>
        <S.CloseIcon 
          size={30} 
          color={theme.colors.white} 
          weight='light' 
          onClick={closeForm}
        />

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
      </S.Wrapper>
    </Main>
  );
}