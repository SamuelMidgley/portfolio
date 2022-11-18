import ReactDOM from 'react-dom'
import Button from '../../../button/Button'
import BorderOptions from './components/BorderOptions'
import LightDarkMode from './components/LightDarkMode'
import ThemeOptions from './components/ThemeOptions'

import './ThemeModal.scss'

function Modal(props: any) {
  return (
    <div className="theme-modal">
      <div className="close">
        <Button onClickHandler={props.onClick} text="x" />
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

export default function ThemeModal(props: any) {
  const modalNode = document.getElementById('modal') as HTMLElement
  return ReactDOM.createPortal(
    <Modal closeModal={props.closeModal} onClick={props.onClick} />,
    modalNode,
  )
}
