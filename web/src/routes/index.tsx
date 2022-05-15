import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

//pages
import { Home } from "../pages/Home/Home";
import { Chat } from "../pages/Chat/Chat";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Router>
    </BrowserRouter>
  );
}