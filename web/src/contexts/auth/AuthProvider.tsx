import { FC, PropsWithChildren, useState, useMemo, useCallback } from 'react';

//services
import { signUpService } from '@/services';
import { signInService } from '@/services';

//contexts
import { AuthStateContext, AuthDispatchContext } from './authContext';

//hooks
import { useLocalStorage } from '@/hooks';

//types
import { SignUpUserData, SignInUserData } from './types';

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const AuthStateProvider = AuthStateContext.Provider;
  const AuthDispatchProvider = AuthDispatchContext.Provider;

  const [userId, setUserId] = useLocalStorage('@ChatApp:id', '');
  const [, setToken] = useLocalStorage('@ChatApp:token');
  const [username, setUsername] = useLocalStorage('@ChatApp:username', '');
  const [profileImage, setProfileImage] = useLocalStorage('@ChatApp:imageURL', '');

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
      setUserId('');
      setToken('');
      setUsername('');
      setProfileImage('')
  }, [
    setUserId,
    setToken,
    setUsername,
    setProfileImage,
  ]);

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