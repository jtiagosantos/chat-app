import { FC, PropsWithChildren } from 'react';
import * as SC from 'styled-components';

//theme
import { theme } from '@/styles/theme';

export const ThemeProvider: FC<PropsWithChildren<unknown>> = ({ 
  children,
}) => {
  return (
    <SC.ThemeProvider theme={theme}>
      {children}
    </SC.ThemeProvider>
  );
}