import React, { useCallback, useState } from 'react'
import Button from '../../../../button/Button'
import setRootStyle from '../../../theme.helper'
import ModalOptions from './ModalOptions'
import './ThemeOptions.scss'

interface ThemeOptionsProps {
  name: string
  option: string
}

export default function ThemeOptions(props: ThemeOptionsProps) {
  const { name, option } = props
  const [showCustom, setShowCustom] = useState(false)
  const [themeValue, setThemeValue] = useState('')

  const saveCustomOption = useCallback(() => {
    if (name === 'font') {
      setRootStyle('--font-color', themeValue)
    } else if (name === 'theme') {
      setRootStyle('--theme-color', themeValue)
    } else if (name === 'background') {
      setRootStyle('--background-color', themeValue)
    }
  }, [name, themeValue])

  function onChangeHandler(e: React.FormEvent<HTMLInputElement>) {
    setThemeValue(e.currentTarget.value)
  }

  const lightDarkClickHandler = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const themeBaseValue =
        (event.target as HTMLElement).innerHTML === 'Light'
          ? 'aliceblue'
          : 'hsl(207, 19%, 9%)'
      if (name === 'font') {
        setRootStyle('--font-color', themeBaseValue)
      } else if (name === 'theme') {
        setRootStyle('--theme-color', themeBaseValue)
      } else if (name === 'background') {
        setRootStyle('--background-color', themeBaseValue)
      }
    },
    [name]
  )

  const showCustomHandler = () => {
    setShowCustom(true)
  }

  return (
    <ModalOptions name={name} option={option}>
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
