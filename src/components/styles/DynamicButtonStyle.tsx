import styles from "./Button.module.css";

interface ButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button = ({ variant, children }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${
        variant === "primary" ? styles.primary : styles.secondary
      }`}
    >
      {children}
    </button>
  );
};
