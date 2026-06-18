import { useRef } from "react";

import CustomInput, { type CustomInputRef } from "./CustomInput";

import styles from "./ForwardRefDemo.module.css";

const ForwardRefDemo = () => {
  const inputRef = useRef<CustomInputRef>(null);

  const handleFocus = () => {
    inputRef.current?.focusInput();
  };

  const handleClear = () => {
    inputRef.current?.clearInput();
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.heading}>forwardRef & useImperativeHandle</h1>

      <p className={styles.description}>
        Parent component controlling a child component through refs.
      </p>

      <CustomInput ref={inputRef} />

      <div className={styles.actions}>
        <button className={styles.primaryBtn} onClick={handleFocus}>
          Focus Input
        </button>

        <button className={styles.secondaryBtn} onClick={handleClear}>
          Clear Input
        </button>
      </div>
    </div>
  );
};

export default ForwardRefDemo;
