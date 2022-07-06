import { FC, PropsWithChildren, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//hooks
import { useAuthValidation } from '@/hooks';

//types
import { PageHandlerProps } from './types';

export const PageHandler: FC<PropsWithChildren<PageHandlerProps>> = (
  { children, typePage }
) => {
  const navigate = useNavigate();
  const { isUserAuthenticated } = useAuthValidation();

  const navigateToHomePage = useCallback(() => {
    navigate('/');
  }, [
    navigate,
  ]);

  const navigateToRoomPage = useCallback(() => {
    navigate('/room');
  }, [
    navigate,
  ]);

  useEffect(() => {
    if (typePage === 'isNotProtectedPage' && isUserAuthenticated) {
      navigateToRoomPage();
    }

    if (typePage === 'isProtectedPage' && !isUserAuthenticated) {
      navigateToHomePage();
    }
  }, [
    typePage,
    isUserAuthenticated,
    navigateToRoomPage,
    navigateToHomePage
  ]);

  return <>{ children }</>;

}