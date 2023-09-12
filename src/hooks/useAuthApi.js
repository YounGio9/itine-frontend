import { useMutation, useQueryClient } from "react-query";
import { login } from "../services/auth.service";

export const useLogin = (options) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload) => await login("/login", payload),

    onSuccess: (data) => {
      options?.onSuccess?.(data);
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
    onError(error) {
      options?.onError?.(error?.response);
    },
  });
};
