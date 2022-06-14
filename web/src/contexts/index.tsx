import { FC, PropsWithChildren } from 'react';

//contexts
import { ThemeProvider } from './theme';

export const ContextsProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}