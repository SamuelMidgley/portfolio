import ReactDOM from 'react-dom'
import Button from '../../../button/Button'
import { setRootStyle } from '../../theme.helper'
import BorderOptions from './components/BorderOptions'

import './ThemeModal.scss'

function Modal(props: any) {

  return (
    <div className="theme-modal">
      <div className='close'>
        <Button onClickHandler={props.onClick} text='x' />
      </div>
      <h1>Color Settings</h1>
      <div className="font">
        <span>Font color</span>
        <div className="font-options">
          <Button text="Dark" />
          <Button text="Light" />
          <input placeholder="custom..." />
        </div>
      </div>
      <div className="theme">
        <span>Theme color</span>
        <div className="theme-options">
          <Button text="Dark" />
          <Button text="Light" />
          <input placeholder="custom..." />
        </div>
      </div>
      <div className="background">
        <span>Background color</span>
        <div className="background-options">
          <Button text="Dark" />
          <Button text="Light" />
          <input placeholder="custom..." />
        </div>
      </div>
      <BorderOptions />
    </div>
  )
}

export default function ThemeModal(props: any) {
  const modalNode = document.getElementById('modal') as HTMLElement
  return ReactDOM.createPortal(<Modal closeModal={props.closeModal} onClick={props.onClick} />, modalNode)
}
