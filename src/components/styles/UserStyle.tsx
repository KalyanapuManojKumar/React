import UserCard from "./UserCard";
import { Button } from "./DynamicButtonStyle";

function App() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f3f4f6",
      padding: "50px",
      gap: "24px",
      fontFamily: "Roboto, sans-serif",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#1f2937",
      textAlign: "center" as const,
    },
    subHeading: {
      fontSize: "1rem",
      color: "#6b7280",
      textAlign: "center" as const,
    },
    buttonGroup: {
      display: "flex",
      gap: "12px",
    },
    stylingList: {
      background: "#ffffff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      width: "350px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>React + TypeScript Styling Examples</h1>

      <p style={styles.subHeading}>
        Common styling approaches used in modern React applications
      </p>

      <div style={styles.stylingList}>
        <h3>Styling Methods</h3>
        <ul>
          <li>Inline Styles</li>
          <li>CSS Stylesheets</li>
          <li>CSS Modules</li>
        </ul>
      </div>

      <UserCard
        name="Manoj Kumar"
        role="Full Stack Developer"
        imageUrl="https://i.pinimg.com/736x/60/a6/e2/60a6e2b0776d1d6735fce5ae7dc9b175.jpg"
      />

      <div style={styles.buttonGroup}>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </div>
  );
}

export default App;
