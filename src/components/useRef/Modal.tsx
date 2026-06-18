import { useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

interface UserData {
  name: string;
  email: string;
  role: string;
}

interface ModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
}

const Modal = ({ onClose, onSubmit }: ModalProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null;

  const handleSubmit = () => {
    onSubmit({
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      role: roleRef.current?.value || "",
    });

    onClose();
  };

  return createPortal(
    <>
      <div className={styles.backdrop} onClick={onClose} />

      <div className={styles.modal}>
        <h2>Add User</h2>

        <input
          ref={nameRef}
          type="text"
          placeholder="Enter Name"
          className={styles.input}
        />

        <input
          ref={emailRef}
          type="email"
          placeholder="Enter Email"
          className={styles.input}
        />

        <input
          ref={roleRef}
          type="text"
          placeholder="Enter Role"
          className={styles.input}
        />

        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>

          <button className={styles.submitBtn} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>,
    modalRoot,
  );
};

export default Modal;
