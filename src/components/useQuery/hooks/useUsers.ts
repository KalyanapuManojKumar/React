import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../api/userApi";
import type { User } from "../types/user.types";

export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],

    queryFn: getUsers,

    staleTime: 1000 * 60,

    retry: 3,

    refetchOnWindowFocus: true,
  });
};
