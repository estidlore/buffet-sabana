import "./styles/App.scss";
import en from "./data/en.json";
import {Nav} from "./components";
import {Beberages, Dishes, Home} from "./views";

import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";


const App = () => (
  <Router>
    <div className="bg-dark light min-vh">
      <Nav brand="Buffet Sabana">
        <Link to="/dishes">{en.dishes.title}</Link>
        <Link to="/beberages">{en.beberages.title}</Link>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beberages" element={<Beberages />} />
        <Route path="/dishes" element={<Dishes />} />
      </Routes>
    </div>
  </Router>
);

export default App;
