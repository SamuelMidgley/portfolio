interface ModalOptionsProps {
  name: string
  option: string
  children: any
}

export default function ModalOptions(props: ModalOptionsProps) {
  return (
    <div className={props.name}>
      <span>{props.option}</span>
      <div className={`${props.name}-options`}>{props.children}</div>
    </div>
  )
}
