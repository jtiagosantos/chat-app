import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

//pages
import { Home } from "../pages/Home/Home";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
    </BrowserRouter>
  );
}