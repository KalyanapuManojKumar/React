import { useState } from "react";
import styles from "./Usestate.module.css";

const UseState = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.heading}>useState Hook Example</h1>

      <p className={styles.description}>
        React state management using useState
      </p>

      <div className={styles.counterContainer}>
        <span className={styles.count}>{count}</span>
      </div>

      <div className={styles.buttonGroup}>
        <button className={styles.primaryButton} onClick={increment}>
          Increment
        </button>

        <button className={styles.secondaryButton} onClick={decrement}>
          Decrement
        </button>

        <button className={styles.resetButton} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseState;
