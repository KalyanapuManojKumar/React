import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createUser } from "../api/userApi";
import type { User } from "../types/user.types";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,

    onMutate: async (newUser) => {
      // Stop outgoing refetches
      await queryClient.cancelQueries({
        queryKey: ["users"],
      });

      // Get current cache
      const previousUsers = queryClient.getQueryData<User[]>(["users"]);

      // Update cache immediately
      queryClient.setQueryData<User[]>(["users"], (oldUsers = []) => [
        ...oldUsers,
        {
          id: Date.now(),
          ...newUser,
        },
      ]);

      return { previousUsers };
    },

    onError: (error, newUser, context) => {
      // Rollback if API fails
      queryClient.setQueryData(["users"], context?.previousUsers);
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
};
