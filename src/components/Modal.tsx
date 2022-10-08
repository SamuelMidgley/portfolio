import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface modalProps {
  title: string;
  message: string;
  button: string;
  isOpen: boolean;
  toggleModal: () => void;
}

const Modal = (props: modalProps) => {
  if (!props.isOpen) return null;
  const modalNode = document.getElementById("modal") as HTMLElement;
  return ReactDOM.createPortal(
    <div className={classes.card}>
      <div className={classes.card_content}>
        <span className={classes.title}>{props.title}</span>
        <span className={classes.message}>{props.message}</span>
        <button className={classes.button} onClick={props.toggleModal}>
          {props.button}
        </button>
      </div>
    </div>,
    modalNode
  );
};

export default Modal;
