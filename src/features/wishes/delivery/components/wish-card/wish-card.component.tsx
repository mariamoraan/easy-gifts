import { bind } from "../../../../../core/styles/bind";
import { Wish } from "../../../domain/entities/wish.entity";
import styles from "./wish-card.module.scss";
import { ImagesList } from "../images-list/images-list.component";
const cn = bind(styles);

interface Props {
  wish: Wish;
}

export const WishCard = (props: Props) => {
  const { wish } = props;
  return (
    <div className={cn("wish")}>
      <p className={cn("wish__name")}>{wish.name}</p>
      {wish.description && (
        <p className={cn("wish__description")}>{wish.description}</p>
      )}
      {wish.imagesUrls && <ImagesList imagesUrls={wish.imagesUrls} />}
      <ul className={cn("wish__links__list")}>
        {wish.links?.map((link) => (
          <li className={cn("wish__links__list__li")} key={link.url}>
            <a
              target="_blank"
              className={cn("wish__links__list__li__link")}
              href={link.url}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
