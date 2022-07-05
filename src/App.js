import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, Login } from "./Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/logn" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
