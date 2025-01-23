import styles from "./links-list.module.scss";
const cn = bind(styles);

import { WishLink } from "../../../domain/entities/wish.entity";
import { bind } from "../../../../../core/styles/bind";

interface Props {
  links?: WishLink[];
  onDeleteLink: (url: string) => void;
}

export const LinksList = (props: Props) => {
  const { links } = props;
  if (!links?.length) return null;
  return (
    <ul className={cn("links-list")}>
      {links.map((link) => (
        <li key={link.url} className={cn("links-list__li")}>
          <a href={link.url} className={cn("links-list__li__link")}>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
