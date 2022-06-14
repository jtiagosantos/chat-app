import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

//context
import { ContextsProvider } from '@/contexts';

export const App = () => {
  return (
    <ContextsProvider>
      <GlobalStyle />
      <Routes />
    </ContextsProvider>
  );
}