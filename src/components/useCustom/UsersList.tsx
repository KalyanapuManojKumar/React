import styles from "./UsersList.module.css";

import { useUsers } from "./useUsers";

const UsersList = () => {
  const { users, loading, error } = useUsers();

  if (loading) {
    return <div className={styles.loading}>Loading Users...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Custom Hook Example</h1>

      <p className={styles.description}>
        Users fetched using a reusable custom hook.
      </p>

      <div className={styles.usersGrid}>
        {users.map((user) => (
          <div key={user.id} className={styles.card}>
            <h3>{user.name}</h3>

            <p>{user.email}</p>

            <span>{user.company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
