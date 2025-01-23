import { bind } from "../../../../../core/styles/bind";
import { Wish } from "../../../domain/entities/wish.entity";
import { formatDate } from "../../../../../core/utils/format-date";
import styles from "./wish-card.module.scss";
const cn = bind(styles);

interface Props {
  wish: Wish;
  onClick?: (id: string) => void;
}

export const WishCard = (props: Props) => {
  const { wish, onClick } = props;
  return (
    <div className={cn("wish")} onClick={() => onClick && onClick(wish.id)}>
      <p className={cn("wish__date")}>
        {formatDate(new Date(wish.creationDate))}
      </p>
      <p className={cn("wish__name")}>{wish.name}</p>
      <p className={cn("wish__description")}>{wish.description}</p>
    </div>
  );
};
