import './NavBar.scss'

export default function NavBar() {
  return (
    <header className="nav-bar">
      <div className="nav-bar_logo">
        <a href="/">SM.</a>
      </div>
      <ul className="nav-bar_actions">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  )
}
