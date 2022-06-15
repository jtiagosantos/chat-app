import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import { UserDialogProvider } from '@/contexts/userDialog/UserDialogProvider';

//pages
import { Home } from '@/pages';
import { Chat } from '@/pages';
import { EnterRoom } from '@/pages';
import { CreateRoom } from '@/pages';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/room/enter' element={<EnterRoom />} />
        <Route path='/room/create' element={<CreateRoom />} />
        <Route path='/chat' element={
          <UserDialogProvider>
            <Chat />
          </UserDialogProvider>
        } />
      </Router>
    </BrowserRouter>
  );
}