import { useCallback, useState } from 'react'
import SettingsIcon from './components/SettingsIcon'
import ThemeModal from './components/theme-modal/ThemeModal'
import './Theme.scss'

export default function Theme() {
  const [showModal, setShowModal] = useState(false)

  const settingsClickHandler = useCallback(() => {
    const contentElement = document.getElementById('content')
    const rootElement = document.querySelector('body')
    if (contentElement === null || rootElement === null) return

    if (showModal) {
      contentElement.style.filter = ''
      rootElement.style.overflow = 'hidden auto'
    } else {
      contentElement.style.filter = 'blur(5px)'
      rootElement.style.overflow = 'hidden'
    }

    setShowModal((prevState) => !prevState)
  }, [showModal])

  // function settingsClickHandler() {
  //   const contentElement = document.getElementById('content')
  //   const rootElement = document.querySelector('body')
  //   if (contentElement === null || rootElement === null) return

  //   if (showModal) {
  //     contentElement.style.filter = ''
  //     rootElement.style.overflow = 'hidden auto'
  //   } else {
  //     contentElement.style.filter = 'blur(5px)'
  //     rootElement.style.overflow = 'hidden'
  //   }

  //   setShowModal((prevState) => !prevState)
  // }

  return (
    <div className="theme">
      <button
        name="Theme options"
        type="button"
        className="theme-icon"
        onClick={settingsClickHandler}
      >
        <SettingsIcon />
      </button>
      {showModal && <ThemeModal onClick={settingsClickHandler} />}
    </div>
  )
}
