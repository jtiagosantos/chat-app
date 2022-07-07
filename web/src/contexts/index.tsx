import { FC, PropsWithChildren } from 'react';

//contexts
import { ThemeProvider } from './theme';
import { ReactQueryProvider } from './reactQuery';
import { AuthProvider } from './auth/AuthProvider';
import { ToastProvider } from './toast/ToastProvider';

export const ContextsProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <AuthProvider>
      <ReactQueryProvider>
        <ToastProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ToastProvider>
      </ReactQueryProvider>
    </AuthProvider>
  );
}