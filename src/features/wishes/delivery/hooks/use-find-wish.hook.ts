import { useQuery } from "@tanstack/react-query";
import { WishesLocator } from "../locator";
import { QUERY_KEYS } from "../../../../core/react-query/keys";

export const useFindWish = (id?: string) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.WISH],
    queryFn: () =>
      id ? WishesLocator.getFindWishQuery().handle(id) : undefined,
  });
  return {
    wish: data,
    isError: isError,
    isLoading: isLoading,
  };
};
