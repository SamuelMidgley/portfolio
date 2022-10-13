import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './projects/Projects'
import Home from './Home'
import Wordle from './projects/wordle/Wordle'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route path="/portfolio/home" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/projects/wordle" element={<Wordle />} />
          <Route path="/portfolio/games" element={<div />} />
        </Routes>
      </div>
    </Router>
  )
}
