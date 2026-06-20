import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="app-content">
        <Outlet />
      </main>
    </>
  );
}

export default App;
