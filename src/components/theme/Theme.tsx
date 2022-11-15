import { useState } from 'react'
import SettingsIcon from './components/SettingsIcon'
import ThemeModal from './components/theme-modal/ThemeModal'
import './Theme.scss'

export default function Theme() {
  const [showModal, setShowModal] = useState(false)

  function settingsClickHandler() {
    const rootElement = document.getElementById('root')
    if (rootElement === null) return

    if (showModal) {
        rootElement.style.filter = ''
        // if (rootElement.parentElement) {
        //     rootElement.parentElement.style.overflow = 'hidden auto'
        // }
    }
    else {
        rootElement.style.filter = 'blur(5px)'
        // if (rootElement.parentElement) {
        //     rootElement.parentElement.style.overflow = 'hidden'
        // }
    }

    setShowModal((prevState) => !prevState)
  }

  return (
    <div className="theme">
      <div className="theme-icon" onClick={settingsClickHandler}>
        <SettingsIcon />
      </div>
      {showModal && <ThemeModal onClick={settingsClickHandler} />}
    </div>
  )
}
