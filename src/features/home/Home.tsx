import { About, Contact, Header, NavBar, Projects } from './components'
import './Home.scss'

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <main className="main">
        <Header />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
