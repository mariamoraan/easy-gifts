import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../../../core/react-query/keys";
import { AuthLocator } from "../../auth.locator";

export const useGetUser = (uid?: string) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: () => AuthLocator.getFindUserQuery().handle(uid ?? ""),
    enabled: !!uid,
  });
  return {
    user: data,
    isError: isError,
    isLoading: isLoading,
  };
};
