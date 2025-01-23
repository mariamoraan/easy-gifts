import { useRef, useState } from "react";
import { bind } from "../../../../../core/styles/bind";
import styles from "./images-list.module.scss";
import { Button } from "../../../../../core/components/button/button.component";
import { CancelIcon } from "../../../../../core/icons";
import { useClickOutside } from "../../../../../core/hooks/use-click-outside.hook";
const cn = bind(styles);

interface Props {
  imagesUrls: string[];
  imagesSize?: "SMALL" | "MEDIUM";
  className?: string;
  removable?: boolean;
  onDelete?: (imageUrl: string) => void;
}

export const ImagesList = (props: Props) => {
  const { imagesUrls, className, imagesSize = "MEDIUM", onDelete } = props;

  const imagesList = useRef<HTMLUListElement>(null);

  const [deletableImage, setDeletableImage] = useState<undefined | string>();

  const onClickImage = (imageUrl: string) => {
    if (!onDelete) return;
    else if (deletableImage === imageUrl) {
      onDelete(imageUrl);
      setDeletableImage(undefined);
    } else {
      setDeletableImage(imageUrl);
    }
  };

  useClickOutside(imagesList, () => setDeletableImage(undefined));

  return (
    <div className={cn("images", className)}>
      <ul ref={imagesList} className={cn("images__list")}>
        {imagesUrls.map((imageUrl) => (
          <li
            className={cn("images__list__li", {
              "images__list__li--small": imagesSize === "SMALL",
              "images__list__li--medium": imagesSize === "MEDIUM",
            })}
            key={imageUrl}
            onClick={() => onClickImage(imageUrl)}
          >
            {deletableImage === imageUrl && (
              <Button
                outlined
                name="delete image"
                className={cn("images__list__li__delete-button")}
                type="button"
              >
                <CancelIcon />
              </Button>
            )}
            <img
              className={cn("images__list__li__img")}
              src={imageUrl}
              aria-label={imageUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
