import { useMutation, useQuery, useQueryClient } from "react-query";
import { getProfile, login } from "../services/auth.service";

export const useLogin = (options) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload) => await login(payload),

    onSuccess: (data) => {
      options?.onSuccess?.(data);
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
    onError(error) {
      options?.onError?.(error?.response);
    },
  });
};

export const useProfileInfos = (options) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryFn: async () => await getProfile(),

    onSuccess: (data) => {
      options?.onSuccess?.(data);
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError(error) {
      options?.onError?.(error?.response);
    },
  });
};
