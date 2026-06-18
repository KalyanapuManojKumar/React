import { useCallback, useState } from "react";
import UserCard from "./UserCard";
import styles from "./UseCallbackDemo.module.css";

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([
    "Manoj Kumar",
    "Rahul Sharma",
    "John Doe",
  ]);

  const handleDelete = useCallback((userName: string) => {
    setUsers((prev) => prev.filter((user) => user !== userName));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>useCallback Hook Example</h1>

      <p className={styles.description}>
        Open the console and click the counter. Notice that UserCard components
        do not re-render unnecessarily.
      </p>

      <div className={styles.counterCard}>
        <h2>Counter: {count}</h2>

        <button
          className={styles.counterBtn}
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment Counter
        </button>
      </div>

      <div className={styles.users}>
        {users.map((user) => (
          <UserCard
            key={user}
            name={user}
            onDelete={() => handleDelete(user)}
          />
        ))}
      </div>
    </div>
  );
};

export default UseCallbackDemo;
