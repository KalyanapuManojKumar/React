import React from "react";
import styles from "./UserCard.module.css";

interface UserCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, role, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.avatar} />

      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.role}>{role}</p>

        <button className={styles.button}>View Profile</button>
      </div>
    </div>
  );
};

export default UserCard;
