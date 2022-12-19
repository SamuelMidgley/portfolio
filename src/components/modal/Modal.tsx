import ReactDOM from 'react-dom'
import './Modal.scss'

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
    <div className="modal-card">
      <div className="card_content">
        <span className="title">{title}</span>
        <span className="message">{message}</span>
        <button type="button" className="button" onClick={toggleModal}>
          {button}
        </button>
      </div>
    </div>,
    modalNode
  )
}

export default Modal
