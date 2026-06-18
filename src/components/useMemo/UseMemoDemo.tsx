import { useMemo, useState } from "react";
import styles from "./UseMemoDemo.module.css";

const users = [
  "Manoj Kumar",
  "Rahul Sharma",
  "John Doe",
  "David Miller",
  "Priya Reddy",
  "Sneha Patel",
  "Rohit Kumar",
  "Anjali Singh",
];

const UseMemoDemo = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");

    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div className={styles.card}>
      <h1 className={styles.heading}>useMemo Hook Example</h1>

      <p className={styles.description}>
        Search users and see how useMemo prevents unnecessary recalculations.
      </p>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.input}
      />

      <div className={styles.list}>
        {filteredUsers.map((user) => (
          <div key={user} className={styles.user}>
            {user}
          </div>
        ))}
      </div>

      <div className={styles.counter}>
        <h3>Counter: {count}</h3>

        <button
          onClick={() => setCount((prev) => prev + 1)}
          className={styles.button}
        >
          Increment Counter
        </button>
      </div>
    </div>
  );
};

export default UseMemoDemo;
