import { create } from "zustand";
import type { User } from "./user.types";

interface UserStore {
  users: User[];

  addUser: (name: string, role: string) => void;

  deleteUser: (id: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [
    {
      id: 1,
      name: "Manoj Kumar",
      role: "Full Stack Developer",
    },
  ],

  addUser: (name, role) =>
    set((state) => ({
      users: [
        ...state.users,
        {
          id: Date.now(),
          name,
          role,
        },
      ],
    })),

  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
}));
