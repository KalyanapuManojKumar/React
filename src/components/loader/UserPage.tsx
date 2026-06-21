import { useLoaderData } from "react-router-dom";

import styles from "./UserPage.module.css";

import type { User } from "./user.types";

const UserPage = () => {
  const users = useLoaderData() as User[];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Users Directory</h1>

      <div className={styles.grid}>
        {users.map((user) => (
          <div key={user.id} className={styles.card}>
            <div className={styles.avatar}>
              {user.name.charAt(0).toUpperCase()}
            </div>

            <h3>{user.name}</h3>

            <p>{user.email}</p>

            <span>@{user.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
