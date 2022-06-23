import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import { UserDialogProvider } from '@/contexts/userDialog/UserDialogProvider';

//pages
import { Home } from '@/pages';
import { Chat } from '@/pages';
import { Room } from '@/pages';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={
          <UserDialogProvider>
            <Chat />
          </UserDialogProvider>
        } />
        <Route path='/room' element={<Room />} />
      </Router>
    </BrowserRouter>
  );
}