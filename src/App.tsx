import './App.scss'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Projects from './projects/Projects'
import Home from './home/Home'
import Wordle from './projects/wordle/Wordle'
import NavBar from './components/navbar/NavBar'
import CssGame from './games/cssgame/CssGame'
import Games from './games/Games'
import SolarSystem from './projects/solarsystem/SolarSystem'
import TopBar from './components/top-bar/TopBar'
import Theme from './components/theme/Theme'

export default function App() {
  return (
    <Router>
      <NavBar />
      <Theme />

      <div id="content">
        <Routes>
          <Route
            path="/portfolio"
            element={<Navigate to="/portfolio/home" />}
          />
          <Route path="/portfolio/home" element={<Home />} />

          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/projects/wordle" element={<Wordle />} />

          <Route path="/portfolio/games" element={<Games />} />
          <Route
            path="/portfolio/games/cssgame"
            element={<CssGame easy={false} />}
          />
          <Route
            path="/portfolio/games/solarsystem"
            element={<SolarSystem />}
          />
        </Routes>
      </div>
    </Router>
  )
}
