import Login from "./components/login/login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/home/Home";
import NotFound from "./views/NotFound/NotFound";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />}>
                  <Route index element={<Home />} />
                  <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="/home" element={<Home />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
