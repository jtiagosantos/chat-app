import { FC, PropsWithChildren, useMemo, useCallback } from 'react';

//services
import { signUpService } from '@/services';
import { signInService } from '@/services';

//contexts
import { AuthStateContext, AuthDispatchContext } from './authContext';

//hooks
import { useLocalStorage } from '@/hooks';

//constants
import {
  USER_ID_STORAGE_KEY,
  TOKEN_STORAGE_KEY,
  USERNAME_STORAGE_KEY,
  USER_PROFILE_IMAGE_STORAGE_KEY,
} from '@/constants';

//types
import { SignUpUserData, SignInUserData } from './types';

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const AuthStateProvider = AuthStateContext.Provider;
  const AuthDispatchProvider = AuthDispatchContext.Provider;

  const [userId, setUserId] = useLocalStorage(USER_ID_STORAGE_KEY, '');
  const [, setToken] = useLocalStorage(TOKEN_STORAGE_KEY);
  const [username, setUsername] = useLocalStorage(USERNAME_STORAGE_KEY, '');
  const [profileImage, setProfileImage] = useLocalStorage(USER_PROFILE_IMAGE_STORAGE_KEY, '');

  const handleSignUp = useCallback(async (data: SignUpUserData) => {
    await signUpService(data);
  }, []);

  const handleSign = useCallback(async (data: SignInUserData) => {
    const response = await signInService(data);

    if (response) {
      const { id, token, username, profileImage } = response;

      setUserId(id);
      setToken(token);
      setUsername(username);
      setProfileImage(profileImage);

      return { id, token, username, profileImage };
    }
  }, [
    setUserId,
    setToken,
    setUsername,
    setProfileImage,
  ]);

  const handleSignOut = useCallback(() => {
    localStorage.removeItem(USER_ID_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(USERNAME_STORAGE_KEY);
    localStorage.removeItem(USER_PROFILE_IMAGE_STORAGE_KEY);
  }, []);

  const authState = useMemo(() => ({
    userId,
    username,
    profileImage,
  }), [
    userId,
    username,
    profileImage,
  ]);

  const authDispatch = useMemo(() => ({
    signUp: handleSignUp,
    signIn: handleSign,
    signOut: handleSignOut,
  }), [
    handleSignUp,
    handleSign,
    handleSignOut,
  ]);

  return (
    <AuthDispatchProvider value={authDispatch}>
      <AuthStateProvider value={authState}>
        {children}
      </AuthStateProvider>
    </AuthDispatchProvider>
  );
}