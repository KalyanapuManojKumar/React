import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./CustomInput.module.css";

export interface CustomInputRef {
  focusInput: () => void;
  clearInput: () => void;
}

const CustomInput = forwardRef<CustomInputRef>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current?.focus();
    },

    clearInput() {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
  }));

  return (
    <div className={styles.container}>
      <label className={styles.label}>User Name</label>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        className={styles.input}
      />
    </div>
  );
});

export default CustomInput;
