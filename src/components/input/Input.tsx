import './Input.scss'

export default function Input(props: any) {
    return (
      <input
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.setValue}
      />
    )
}