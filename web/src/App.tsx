import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { ContextProvider } from './contexts';

export const App = () => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Routes />
    </ContextProvider>
  );
}