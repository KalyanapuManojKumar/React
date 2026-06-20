import { useNavigate } from "react-router-dom";

import styles from "./Home.module.css";

import { demoPages } from "../../data/demoPages";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        React Hooks & State Management Playground
      </h1>

      <p className={styles.subHeading}>
        Explore React concepts with practical examples.
      </p>

      <div className={styles.grid}>
        {demoPages.map((item) => (
          <div
            key={item.path}
            className={styles.card}
            onClick={() => navigate(item.path)}
          >
            <h2>{item.title}</h2>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
