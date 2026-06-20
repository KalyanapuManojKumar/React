import { useState } from "react";

import { useUsers } from "../hooks/useUsers";

import { useCreateUser } from "../hooks/useCreateUser";

import styles from "../styles/UserDashboard.module.css";

const UserDashboard = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useUsers();

  const createUserMutation = useCreateUser();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const handleCreateUser = () => {
    if (!name || !email) return;

    createUserMutation.mutate({
      name,
      email,
    });

    setName("");
    setEmail("");
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading Users...</div>;
  }

  if (isError) {
    return <div className={styles.error}>{(error as Error).message}</div>;
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.heading}>TanStack Query Dashboard</h1>

      {isFetching && <p className={styles.fetching}>Refreshing Data...</p>}

      <div className={styles.form}>
        <input
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />

        <input
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />

        <button className={styles.addBtn} onClick={handleCreateUser}>
          Add User
        </button>

        <button className={styles.refreshBtn} onClick={() => refetch()}>
          Refetch
        </button>
      </div>

      <div className={styles.userList}>
        {users?.map((user) => (
          <div key={user.id} className={styles.userCard}>
            <h3>{user.name}</h3>

            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
