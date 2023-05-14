import { About, Header, NavBar } from './components'
import './Home.scss'

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <main className="main">
        <Header />
        <About />
      </main>
    </div>
  )
}
