import { useQuery } from "@tanstack/react-query";
import { WishesLocator } from "../locator";
import { QUERY_KEYS } from "../../../../core/react-query/keys";

export const useFindWishes = ({ userId }: { userId: string | undefined }) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.WISHES, userId],
    queryFn: () => WishesLocator.getFindWishesQuery().handle(),
  });
  return {
    wishes: data,
    isErrorWithWishes: isError,
    isLoadingWishes: isLoading,
  };
};
