import { useState } from 'react'
import './Home.css'

export default function Home() {
  const [isFunky, setIsFunky] = useState(false)

  const onClickHandler = () => {
    setIsFunky((prevFunky) => !prevFunky)
  }

  return (
    <div className="cool_thing">
      <div
        className={`content ${isFunky ? 'funky' : ''}`}
        onClick={onClickHandler}
      >
        <p className="subtitle">Hi, I'm Sam, I can follow a tutorial</p>
        <a href="https://github.com/SamuelMidgley">
          <h3 className="title">@SamMidgley</h3>
        </a>
      </div>
    </div>
  )
}
