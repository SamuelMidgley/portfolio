import './NavBar.scss'

import { useState } from 'react'
import MenuIcon from './MenuIcon'
import NavMenuItem from './components/NavMenuItem'

const NavBar = () => {
  const classNames = require('classnames')
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={classNames('nav-menu', showMenu ? 'active' : 'inactive')}>
      <div className={classNames(showMenu ? 'active' : 'inactive')}>
        <div className="animation-container">
          <div
            className={classNames('thingy', showMenu ? 'active' : 'inactive')}
          />
        </div>
        <MenuIcon showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <nav className={classNames(!showMenu ? 'nav-hidden' : '', 'navigation')}>
        <ul>
          <NavMenuItem
            textContent="home"
            path="/portfolio/home"
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
          <NavMenuItem
            textContent="projects"
            path="/portfolio/projects"
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
          <NavMenuItem
            textContent="games"
            path="/portfolio/games"
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
