import { useNavigate } from "react-router-dom";
import { bind } from "../../../../../core/styles/bind";
import { WishCard } from "../wish-card/wish-card.component";
import styles from "./wish-list.module.scss";
import { AppRoutes } from "../../../../../core/router/routes";
import { Wish } from "../../../domain/entities/wish.entity";
const cn = bind(styles);

interface Props {
  wishes: Wish[];
}

export const WishList = (props: Props) => {
  const { wishes } = props;
  const navigate = useNavigate();

  return (
    <div className={cn("wishes")}>
      {wishes?.map((wish) => (
        <WishCard
          key={wish.id}
          wish={wish}
          onClick={(id) => navigate(AppRoutes.WISH(id))}
        />
      ))}
    </div>
  );
};
