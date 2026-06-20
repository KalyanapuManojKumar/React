import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsers = async () => {
  const response = await api.get("/users");

  return response.data;
};

export const createUser = async (user: { name: string; email: string }) => {
  const response = await api.post("/users", user);

  return response.data;
};
