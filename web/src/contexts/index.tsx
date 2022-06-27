import { FC, PropsWithChildren } from 'react';

//contexts
import { ThemeProvider } from './theme';
import { ReactQueryProvider } from './reactQuery';
import { AuthProvider } from './auth/AuthProvider';

export const ContextsProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <AuthProvider>
      <ReactQueryProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </ReactQueryProvider>
    </AuthProvider>
  );
}