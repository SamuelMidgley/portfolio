import ReactDOM from 'react-dom'
import Button from '../../../button/Button'
import BorderOptions from './components/BorderOptions'
import LightDarkMode from './components/LightDarkMode'
import ThemeOptions from './components/ThemeOptions'

import './ThemeModal.scss'

interface ModalProps {
  onClick: () => void // not sure this is the best
}

function Modal(props: ModalProps) {
  const { onClick } = props
  return (
    <div className="theme-modal">
      <div className="close">
        <Button onClickHandler={onClick} text="x" />
      </div>
      <h1>Color Settings</h1>
      <LightDarkMode />
      <ThemeOptions name="font" option="Font Color" />
      <ThemeOptions name="theme" option="Theme Color" />
      <ThemeOptions name="background" option="Background Color" />
      <BorderOptions />
    </div>
  )
}

export default function ThemeModal(props: ModalProps) {
  const modalNode = document.getElementById('modal') as HTMLElement
  return ReactDOM.createPortal(<Modal onClick={props.onClick} />, modalNode)
}
