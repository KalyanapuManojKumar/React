import { useState } from "react";
import Modal from "./Modal";

interface UserData {
  name: string;
  email: string;
  role: string;
}

function UseRef() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
        gap: "20px",
      }}
    >
      <h1 style={{ color: "#1e40af" }}>useRef & Portal Example</h1>

      <button
        onClick={() => setShowModal(true)}
        style={{
          padding: "14px 24px",
          border: "none",
          borderRadius: "10px",
          background: "#2563eb",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Add User
      </button>

      {user && (
        <div
          style={{
            width: "350px",
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h3>User Details</h3>

          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Role:</strong> {user.role}
          </p>
        </div>
      )}

      {showModal && (
        <Modal onClose={() => setShowModal(false)} onSubmit={setUser} />
      )}
    </div>
  );
}

export default UseRef;
