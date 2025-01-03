import { bind } from "../../../../../core/styles/bind";
import { useFindWishes } from "../../hooks/use-find-wishes.hook";
import { WishCard } from "../wish-card/wish-card.component";
import styles from "./wish-list.module.scss";
const cn = bind(styles);

export const WishList = () => {
  const { wishes } = useFindWishes();
  return (
    <div className={cn("wishes")}>
      {wishes?.map((wish) => (
        <WishCard key={wish.id} wish={wish} />
      ))}
    </div>
  );
};
