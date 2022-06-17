import { useState } from 'react';

//components
import { Button } from '@/components';
import { SignInForm, SignUpForm } from './components';

//types
import { SelectedForm } from './types';

//images
import banner from '@/images/banner.svg';

//styles
import * as S from './styles';
import { theme } from '@/styles/theme';

export const Home = () => {
  const [selectedForm, setSelectedForm] = useState<SelectedForm>('');

  const openSignInForm = () => setSelectedForm('signIn')
  const openSignUpForm = () => setSelectedForm('signUp');
  const closeForm = () => setSelectedForm('');

  return (
    <S.Container>
      {!selectedForm && (
        <S.ButtonGroup>
          <Button 
            type="button" 
            width="100%"
            height="3rem"
            onClick={openSignInForm}
          >
            Login
          </Button>
          <Button 
            type="button" 
            width="100%"
            height="3rem"
            onClick={openSignUpForm}
          >
            Register
          </Button>
        </S.ButtonGroup>
      )}

      {selectedForm && (
        <S.Wrapper>
          <S.CloseIcon 
            size={30} 
            color={theme.colors.white} 
            weight='light' 
            onClick={closeForm}
          />

          {selectedForm === 'signIn' && <SignInForm />}

          {selectedForm === 'signUp' && <SignUpForm />}
        </S.Wrapper>
      )}

      <S.ImageWrapper>
        <img src={banner} alt="" />
      </S.ImageWrapper>
    </S.Container>
  );
}