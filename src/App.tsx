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
              <Link className="nav-link" to="/portfolio">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/portfolio/projects">
                Projects
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/projects/wordle" element={<Wordle />} />
        </Routes>
      </div>
    </Router>
  );
}
