import { useUser } from "./useUser";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const { user, promoteUser } = useUser();

  return (
    <div className={styles.card}>
      <h2>{user.name}</h2>

      <p>{user.role}</p>

      <span>{user.email}</span>

      <button className={styles.button} onClick={promoteUser}>
        Promote User
      </button>
    </div>
  );
};

export default UserProfile;
