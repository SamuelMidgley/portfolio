import Bio from './components/bio/Bio'
import Header from './components/header/Header'
import MiniProject from './components/mini-projects/MiniProject'
import Skills from './components/skills/Skills'
import Timeline from './components/timeline/Timeline'
import './Home.scss'

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Bio />
      <MiniProject />
      <Skills />
      <Timeline />
    </div>
  )
}
