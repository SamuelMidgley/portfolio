import './NavBar.scss'

import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import MenuIcon from './MenuIcon'

const NavBar = () => {
  const classNames = require('classnames')
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className={classNames('nav-menu', showMenu ? 'active' : 'inactive')}>
        <div
          className={classNames('thingy', showMenu ? 'active' : 'inactive')}
        />
        <MenuIcon showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <nav className={!showMenu ? 'nav-hidden' : ''}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active-nav nav-link' : 'nav-link'
              }
              to="/portfolio/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active-nav nav-link' : 'nav-link'
              }
              to="/portfolio/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active-nav nav-link' : 'nav-link'
              }
              to="/portfolio/games"
            >
              Games
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
