import './App.scss'

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import Projects from './projects/Projects'
import Home from './home/Home'
import Wordle from './projects/wordle/Wordle'
import CssGame from './games/cssgame/CssGame'
import Games from './games/Games'
// import SolarSystem from './projects/solarsystem/SolarSystem'
import Theme from './components/theme/Theme'

export function App() {
  return (
    <>
      <Theme />

      <div id="content">
        <Routes>
          <Route path="/" element={<Navigate to="/portfolio/home" />} />
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
          {/* <Route
            path="/portfolio/games/solarsystem"
            element={<SolarSystem />}
          /> */}
        </Routes>
      </div>
    </>
  )
}

export function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  )
}
