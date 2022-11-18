import React from 'react'
import Button from '../../../../button/Button'
import { setRootStyle } from '../../../theme.helper'
import ModalOptions from './ModalOptions'
import './LightDarkMode.scss'

function lightDarkClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
  const themeValue = (event.target as HTMLElement).innerHTML
  if (themeValue === 'Dark') {
    setRootStyle('--font-color', 'aliceblue')
    setRootStyle('--theme-color', 'aliceblue')
    setRootStyle('--background-color', 'hsl(207, 19%, 9%)')
  } else if (themeValue === 'Light') {
    setRootStyle('--font-color', '#000')
    setRootStyle('--theme-color', '#000')
    setRootStyle('--background-color', '#efefef')
  }
}

export default function LightDarkMode() {
  return (
    <ModalOptions name="lightdark" option="Theme">
      <Button text="Dark" onClickHandler={lightDarkClickHandler} />
      <Button text="Light" onClickHandler={lightDarkClickHandler} />
    </ModalOptions>
  )
}
