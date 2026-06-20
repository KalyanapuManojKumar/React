import { useState } from "react";

import styles from "./UserDashboard.module.css";

import { useUserStore } from "./userStore";

const UserDashboard = () => {
  const { users, addUser, deleteUser } = useUserStore();

  const [name, setName] = useState("");

  const [role, setRole] = useState("");

  const handleAddUser = () => {
    if (!name.trim() || !role.trim()) return;

    addUser(name, role);

    setName("");
    setRole("");
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.heading}>Zustand User Manager</h1>

      <p className={styles.subHeading}>Global State Management using Zustand</p>

      <div className={styles.form}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          className={styles.input}
        />

        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Enter Role"
          className={styles.input}
        />

        <button onClick={handleAddUser} className={styles.addBtn}>
          Add User
        </button>
      </div>

      <div className={styles.userList}>
        {users.map((user) => (
          <div key={user.id} className={styles.userCard}>
            <div>
              <h3>{user.name}</h3>

              <p>{user.role}</p>
            </div>

            <button
              onClick={() => deleteUser(user.id)}
              className={styles.deleteBtn}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
