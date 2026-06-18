import { useState, type ReactNode } from "react";
import { UserContext, type User } from "./UserContext";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    name: "Manoj Kumar",
    role: "Frontend Developer",
    email: "manoj@example.com",
  });

  const promoteUser = () => {
    setUser((prev) => ({
      ...prev,
      role: "Senior Frontend Developer",
    }));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        promoteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
