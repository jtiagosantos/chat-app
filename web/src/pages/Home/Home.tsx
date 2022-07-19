import { useEffect, useState } from 'react';

//layouts
import { Main } from '@/layouts';

//components
import { SignInForm, SignUpForm, ButtonGroup } from './components';

//hooks
import { useTransition } from '@/hooks';

//constants
import { FORM_ANIMATION_STYLES, BUTTON_GROUP_ANIMATION_STYLES } from '@/constants';

//types
import { SelectedForm } from './types';

//styles
import { Wrapper } from './styles';
import { CloseFormButton } from '@/styles/components/CloseFormButton';

export const Home = () => {
  const [selectedForm, setSelectedForm] = useState<SelectedForm>('');
  const [isOpenForm, setIsOpenForm] = useState(true);
  const [isOpenButtonGroup, setIsOpenButtonGroup] = useState(true);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const [isFirstRendering, setIsFirstRendering] = useState(true);

  const formTransition = useTransition(isOpenForm, FORM_ANIMATION_STYLES);

  const buttonGroupTransition = useTransition(
    isOpenButtonGroup,
    BUTTON_GROUP_ANIMATION_STYLES,
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
              onOpenSignInForm={() => openForm('signIn')}
              onOpenSignUpForm={() => openForm('signUp')}
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
          (item && selectedForm === 'signIn') && (
            <SignInForm style={style} />
          )
        ))}

        {formTransition((style, item) => (
          (item && selectedForm === 'signUp') && (
            <SignUpForm style={style} />
          )
        ))}
      </Wrapper>
    </Main>
  );
}