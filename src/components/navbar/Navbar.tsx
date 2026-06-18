import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Manoj Dev</div>

      <ul className={styles.navLinks}>
        <li>
          <a href="/" className={styles.link}>
            Home
          </a>
        </li>

        <li>
          <a href="/about" className={styles.link}>
            About
          </a>
        </li>

        <li>
          <a href="/services" className={styles.link}>
            Services
          </a>
        </li>

        <li>
          <a href="/projects" className={styles.link}>
            Projects
          </a>
        </li>

        <li>
          <a href="/contact" className={styles.link}>
            Contact
          </a>
        </li>
      </ul>

      <button className={styles.loginBtn}>Login</button>
    </nav>
  );
};

export default Navbar;
