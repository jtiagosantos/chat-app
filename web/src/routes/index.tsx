import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

import { UserDialogContextProvider } from '../contexts/userDialog';

//pages
import { Home } from "../pages/Home/Home";
import { Chat } from "../pages/Chat/Chat";
import { EnterRoom } from "../pages/EnterRoom/EnterRoom";
import { CreateRoom } from '../pages/CreateRoom/CreateRoom';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/room/enter" element={<EnterRoom />} />
        <Route path="/room/create" element={<CreateRoom />} />
        <Route path="/chat" element={
          <UserDialogContextProvider>
            <Chat />
          </UserDialogContextProvider>
        } />
      </Router>
    </BrowserRouter>
  );
}