import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { User } from "./user.types";

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [
    {
      id: 1,
      name: "Manoj Kumar",
      role: "Frontend Developer",
    },
  ],
};

const userSlice = createSlice({
  name: "users",

  initialState,

  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },

    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
