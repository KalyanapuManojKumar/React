import { createContext } from "react";

export interface User {
  name: string;
  role: string;
  email: string;
}

export interface UserContextType {
  user: User;
  promoteUser: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);
