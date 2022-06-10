import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import { UserDialogContextProvider } from '@/contexts/userDialog';

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
          <UserDialogContextProvider>
            <Chat />
          </UserDialogContextProvider>
        } />
      </Router>
    </BrowserRouter>
  );
}