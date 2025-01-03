import { useMutation, useQueryClient } from "@tanstack/react-query";
import { WishesLocator } from "../locator";
import { Wish } from "../../domain/entities/wish.entity";
import { QUERY_KEYS } from "../../../../core/react-query/keys";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../../core/router/routes";

export const useCreateWish = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isError, isSuccess, data } = useMutation({
    mutationFn: (wish: Omit<Wish, "id">) =>
      WishesLocator.getCreateWishCommand().handle(wish),
    onMutate: () => {
      queryClient.cancelQueries({ queryKey: [QUERY_KEYS.WISHES] });
      navigate(AppRoutes.HOME);
    },
  });
  return {
    createWish: mutate,
    isCreateWishError: isError,
    isCreateWishSuccess: isSuccess,
    data,
  };
};
