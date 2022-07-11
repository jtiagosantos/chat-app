import { FC, PropsWithChildren, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//hooks
import { useAuthValidation, useToastDispatch } from '@/hooks';

//types
import { PageHandlerProps } from './types';

export const PageHandler: FC<PropsWithChildren<PageHandlerProps>> = (
  { children, typePage }
) => {
  const navigate = useNavigate();
  const { isUserAuthenticated } = useAuthValidation();
  const { openToast } = useToastDispatch();

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
      openToast({
        messageType: 'error',
        message: 'Unauthorized access',
      });
      navigateToHomePage();
    }
  }, [
    typePage,
    isUserAuthenticated,
    navigateToRoomPage,
    navigateToHomePage,
    openToast,
  ]);

  return <>{ children }</>;

}