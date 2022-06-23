import { FC, PropsWithChildren } from 'react';

//contexts
import { ThemeProvider } from './theme';
import { ReactQueryProvider } from './reactQuery';

export const ContextsProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ReactQueryProvider>
  );
}