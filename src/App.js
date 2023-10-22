import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/home/Home";
import NotFound from "./views/NotFound/NotFound";
import Login from "./views/login/Login"
import Register from "./views/register/Register";


function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />}>
                  <Route index element={<Home />} />
                  <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Register />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
