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
    },
    buttonGroup: {
      display: "flex",
      gap: "12px",
    },
  };

  return (
    <div style={styles.container}>
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
