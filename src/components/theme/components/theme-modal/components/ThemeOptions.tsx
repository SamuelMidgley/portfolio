import { useState } from 'react'
import Button from '../../../../button/Button'
import { setRootStyle } from '../../../theme.helper'
import ModalOptions from './ModalOptions'
import './ThemeOptions.scss'

export default function ThemeOptions(props: any) {
  // TODO : Use typescript
  const [showCustom, setShowCustom] = useState(false)
  const [themeValue, setThemeValue] = useState('')

  function showCustomHandler() {
    setShowCustom(true)
  }

  function saveCustomOption() {
    console.log('1')
    console.log(props.name)
    if (props.name === 'font') {
      setRootStyle('--font-color', themeValue)
    } else if (props.name === 'theme') {
      setRootStyle('--theme-color', themeValue)
    } else if (props.name === 'background') {
      setRootStyle('--background-color', themeValue)
    }
  }

  function onChangeHandler(e: any) {
    setThemeValue(e.target.value)
  }

  function lightDarkClickHandler(e: any) {
    console.log(e)
    const themeValue =
      e.target.innerHTML === 'Light' ? 'aliceblue' : 'hsl(207, 19%, 9%)'
    if (props.name === 'font') {
      setRootStyle('--font-color', themeValue)
    } else if (props.name === 'theme') {
      setRootStyle('--theme-color', themeValue)
    } else if (props.name === 'background') {
      setRootStyle('--background-color', themeValue)
    }
  }

  return (
    <ModalOptions name={props.name} option={props.option}>
      <Button text="Dark" onClickHandler={lightDarkClickHandler} />
      <Button text="Light" onClickHandler={lightDarkClickHandler} />
      {showCustom ? (
        <div className="custom-option">
          <input
            value={themeValue}
            placeholder="Custom..."
            onChange={onChangeHandler}
          />
          <Button onClickHandler={saveCustomOption} text="Save" />
        </div>
      ) : (
        <Button text="Custom" onClickHandler={showCustomHandler} />
      )}
    </ModalOptions>
  )
}
