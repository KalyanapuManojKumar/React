import { useEffect, useState } from "react";
import styles from "./UseEffectDemo.module.css";

interface User {
  id: number;
  name: string;
  email: string;
}

const UseEffectDemo = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>useEffect Hook Example</h1>

      <p className={styles.description}>
        Fetching users when the component mounts.
      </p>

      {loading && <div className={styles.loading}>Loading users...</div>}

      {error && <div className={styles.error}>{error}</div>}

      {!loading &&
        !error &&
        users.map((user) => (
          <div key={user.id} className={styles.card}>
            <h3>{user.name}</h3>

            <p>{user.email}</p>
          </div>
        ))}
    </div>
  );
};

export default UseEffectDemo;
