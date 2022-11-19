import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

interface ModalProps {
  title: string
  message: string
  button: string
  isOpen: boolean
  toggleModal: () => void
}

const Modal = (props: ModalProps) => {
  const { title, message, button, isOpen, toggleModal } = props
  if (!isOpen) return null
  const modalNode = document.getElementById('modal') as HTMLElement
  return ReactDOM.createPortal(
    <div className={classes.card}>
      <div className={classes.card_content}>
        <span className={classes.title}>{title}</span>
        <span className={classes.message}>{message}</span>
        <button type="button" className={classes.button} onClick={toggleModal}>
          {button}
        </button>
      </div>
    </div>,
    modalNode
  )
}

export default Modal
