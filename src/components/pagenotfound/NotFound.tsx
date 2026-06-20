import { Link, useRouteError } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.code}>404</h1>

        <h2 className={styles.title}>Page Not Found</h2>

        <p className={styles.description}>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link to="/" className={styles.button}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
