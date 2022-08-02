import { FC, PropsWithChildren } from 'react';

//contexts
import { ThemeProvider } from './theme';
import { ReactQueryProvider } from './reactQuery';
import { AuthProvider } from './auth/AuthProvider';
import { ToastProvider } from './toast/ToastProvider';
import { RoomsByUserProvider } from './roomsByUser/RoomsByUserProvider';

export const ContextsProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <AuthProvider>
      <ReactQueryProvider>
        <RoomsByUserProvider>
          <ToastProvider>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </ToastProvider>
        </RoomsByUserProvider>
      </ReactQueryProvider>
    </AuthProvider>
  );
}