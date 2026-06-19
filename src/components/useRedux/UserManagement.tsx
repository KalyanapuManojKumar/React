import { useState } from "react";

import { addUser, deleteUser } from "./userSlice";

import { useAppDispatch, useAppSelector } from "./reduxHooks";

import styles from "./UserManagement.module.css";

const UserManagement = () => {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.users.users);

  const [name, setName] = useState("");

  const [role, setRole] = useState("");

  const handleAddUser = () => {
    if (!name || !role) return;

    dispatch(
      addUser({
        id: Date.now(),
        name,
        role,
      }),
    );

    setName("");
    setRole("");
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.heading}>Redux Toolkit User Manager</h1>

      <div className={styles.form}>
        <input
          value={name}
          placeholder="User Name"
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />

        <input
          value={role}
          placeholder="Role"
          onChange={(e) => setRole(e.target.value)}
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
              className={styles.deleteBtn}
              onClick={() => dispatch(deleteUser(user.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
