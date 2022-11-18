import './Button.scss'

interface ButtonProps {
    text: string
    onClickHandler?: any
}

export default function Button(props : ButtonProps) {
    return (
    <button className='themed-button' onClick={props.onClickHandler}>
        {props.text}
    </button>)
}