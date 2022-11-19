import { ChangeEventHandler } from 'react'
import './Input.scss'

interface InputProps {
  placeholder: string
  value: string
  setValue: ChangeEventHandler<HTMLInputElement>
}

export default function Input(props: InputProps) {
  const { placeholder, value, setValue } = props

  return <input placeholder={placeholder} value={value} onChange={setValue} />
}
