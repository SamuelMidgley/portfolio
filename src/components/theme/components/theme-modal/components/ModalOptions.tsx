interface ModalOptionsProps {
  name: string
  option: string
  children: React.ReactNode
}

export default function ModalOptions(props: ModalOptionsProps) {
  const { name, option, children } = props
  return (
    <div className={name}>
      <span>{option}</span>
      <div className={`${name}-options`}>{children}</div>
    </div>
  )
}
