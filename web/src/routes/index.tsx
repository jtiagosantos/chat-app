import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

//providers
import { UserDialogProvider } from '@/contexts/userDialog/UserDialogProvider';

//layouts
import { PageHandler } from '@/layouts';

//pages
import { Home } from '@/pages';
import { Chat } from '@/pages';
import { Room } from '@/pages';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route 
          path='/' 
          element={
            <PageHandler typePage='isNotProtectedPage'>
              <Home />
            </PageHandler>
          } 
        />
        <Route 
          path='/chat' 
          element={
            <PageHandler typePage='isProtectedPage'>
              <UserDialogProvider>
                <Chat />
              </UserDialogProvider>
            </PageHandler>
          } 
        />
        <Route 
          path='/room' 
          element={
            <PageHandler typePage='isProtectedPage'>
              <Room />
            </PageHandler>
          } 
        />
        <Route 
          path='*' 
          element={
            <PageHandler typePage='isNotProtectedPage'>
              <Home />
            </PageHandler>
          } 
        />
      </Router>
    </BrowserRouter>
  );
}