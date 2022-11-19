import { useState } from 'react'
import './Header.scss'

export default function Header() {
  const [isFunky, setIsFunky] = useState(false)

  // const onClickHandler = () => {
  //   setIsFunky((prevFunky) => !prevFunky)
  // }

  return (
    <header className="cool_thing">
      <div className={`content ${isFunky ? 'funky' : ''}`}>
        <a href="https://github.com/SamuelMidgley">
          <h3 className="title">@SamMidgley</h3>
        </a>
      </div>
    </header>
  )
}
