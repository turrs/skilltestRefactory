import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Academy,
  Events,
  LandingPage,
  Login,
  Partnership,
} from "./Pages";
import FAQ from "./Pages/FAQ";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/about" element={<About></About>}></Route>
          <Route exact path="/faq" element={<FAQ></FAQ>}></Route>
          <Route exact path="/events" element={<Events />}></Route>
          <Route
            exact
            path="/partnership"
            element={<Partnership></Partnership>}
          ></Route>
          <Route exact path="/academy" element={<Academy></Academy>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
