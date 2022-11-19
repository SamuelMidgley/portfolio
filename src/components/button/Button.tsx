import './Button.scss'

interface ButtonProps {
  text: string
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button(props: ButtonProps) {
  const { text, onClickHandler } = props
  return (
    <button type="button" className="themed-button" onClick={onClickHandler}>
      {text}
    </button>
  )
}
