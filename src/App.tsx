import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import Projects from './projects/home/Projects'
import Home from './home/Home'
import Wordle from './projects/wordle/Wordle'
import CssGame from './projects/cssgame/CssGame'
import SolarSystem from './projects/solarsystem/SolarSystem'
import Theme from './components/theme/Theme'
import HomeButton from './components/home-button/HomeButton'
import ScrollToTop from './components/scroll-to-top/ScrollToTop'

import './App.scss'
import NotFound from './NotFound'

export function App() {
  return (
    <>
      <HomeButton />
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
          <Route
            path="/portfolio/projects/css-game"
            element={<CssGame easy={false} />}
          />
          <Route
            path="/portfolio/projects/solar-system"
            element={<SolarSystem />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export function WrappedApp() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  )
}
