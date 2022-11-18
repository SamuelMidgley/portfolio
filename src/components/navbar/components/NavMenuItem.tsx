import './NavMenuItem.scss'

import { NavLink } from 'react-router-dom'

interface NavMenuItemProps {
  textContent: string
  path: string
  showMenu: boolean
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const NavMenuItem = (props: NavMenuItemProps) => {
  return (
    <li>
      <NavLink
        to={props.path}
        className={({ isActive }) => (isActive ? 'active-nav' : 'inactive-nav')}
        onClick={() => props.setShowMenu((prevState: any) => !prevState)}
      >
        <div className="row">
          <div className="wrap">
            <div className="left">{props.textContent}</div>
            <div className="right">{props.textContent}</div>
          </div>
        </div>
      </NavLink>
    </li>
  )
}

export default NavMenuItem
