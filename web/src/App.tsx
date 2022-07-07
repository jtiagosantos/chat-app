import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

//components
import { Toast } from '@/components';

//contexts
import { ContextsProvider } from '@/contexts';

export const App = () => {
  return (
    <ContextsProvider>
      <GlobalStyle />
      <Routes />
      <Toast />
    </ContextsProvider>
  );
}