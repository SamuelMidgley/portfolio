import { useCallback } from 'react'
import Button from '../../../../button/Button'
import setRootStyle from '../../../theme.helper'

import './BorderOptions.scss'
import ModalOptions from './ModalOptions'

export default function BorderOptions() {
  const borderClickHandler = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const textContent = (event.target as HTMLElement).outerText
      if (textContent === 'Square') {
        setRootStyle('--border-radius', '0px')
      }
      if (textContent === 'Medium') {
        setRootStyle('--border-radius', '3px')
      }
      if (textContent === 'Round') {
        setRootStyle('--border-radius', '20px')
      }
    },
    []
  )

  // function borderClickHandler(e: React.MouseEvent<HTMLElement>) {}
  return (
    <ModalOptions name="border" option="Border Radius">
      <Button onClickHandler={borderClickHandler} text="Square" />
      <Button onClickHandler={borderClickHandler} text="Medium" />
      <Button onClickHandler={borderClickHandler} text="Round" />
    </ModalOptions>
  )
}
