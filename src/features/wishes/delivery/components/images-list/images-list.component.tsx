import { useLayoutEffect, useRef, useState } from "react";
import { bind } from "../../../../../core/styles/bind";
import styles from "./images-list.module.scss";
import { Button } from "../../../../../core/components/button/button.component";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CancelIcon,
} from "../../../../../core/icons";
import { useClickOutside } from "../../../../../core/hooks/use-click-outside.hook";
const cn = bind(styles);

const MAX_IMAGE_WIDTH: number = 130;
const IMAGES_GAP: number = 8;

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
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth <= 600);
  const [imagesListScroll, setImagesListScroll] = useState(0);
  const [maxScrollLeft, setMaxScrollLeft] = useState(
    imagesList.current?.scrollWidth
      ? imagesList.current?.scrollWidth - imagesList.current?.clientWidth
      : undefined
  );

  const isVisibleImagesListLeftArrow: boolean = imagesListScroll !== 0;
  const isVisibleImagesListRightArrow: boolean =
    maxScrollLeft === undefined || maxScrollLeft > imagesListScroll;
  const SCROLL_SIZE: number =
    (MAX_IMAGE_WIDTH + IMAGES_GAP) * (isSmallDevice ? 1 : 3);

  const scrollOnImagesList = (direction: "RIGHT" | "LEFT") => {
    const scrollLeft = Math.max(imagesListScroll - SCROLL_SIZE, 0);
    const scrollRight = maxScrollLeft
      ? Math.min(imagesListScroll + SCROLL_SIZE, maxScrollLeft)
      : imagesListScroll + SCROLL_SIZE;
    const scroll = direction === "LEFT" ? scrollLeft : scrollRight;
    imagesList.current?.scroll(scroll, 0);
    setImagesListScroll(scroll);
  };

  useLayoutEffect(() => {
    setMaxScrollLeft(
      imagesList.current?.scrollWidth
        ? imagesList.current?.scrollWidth - imagesList.current?.clientWidth
        : undefined
    );
    setIsSmallDevice(window.innerWidth <= 600);
  }, [window.innerWidth]);

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
      {isVisibleImagesListLeftArrow && (
        <Button
          outlined
          onClick={() => scrollOnImagesList("LEFT")}
          className={cn("images__button", "images__button--left")}
        >
          <ArrowLeftIcon />
        </Button>
      )}
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
      {isVisibleImagesListRightArrow && (
        <Button
          outlined
          onClick={() => scrollOnImagesList("RIGHT")}
          className={cn("images__button", "images__button--right")}
        >
          <ArrowRightIcon />
        </Button>
      )}
    </div>
  );
};
