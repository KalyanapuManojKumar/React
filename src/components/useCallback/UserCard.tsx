import { memo } from "react";
import styles from "./UserCard.module.css";

interface UserCardProps {
  name: string;
  onDelete: () => void;
}

const UserCard = ({ name, onDelete }: UserCardProps) => {
  console.log(`${name} rendered`);

  return (
    <div className={styles.card}>
      <h3>{name}</h3>

      <button className={styles.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default memo(UserCard);
