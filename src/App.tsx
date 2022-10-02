import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./projects/Projects";
import Home from "./Home";
import Wordle from "./projects/wordle/Wordle";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/wordle" element={<Wordle />} />
        </Routes>
      </div>
    </Router>
  );
}
