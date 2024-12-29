import { useEffect, useRef, useState } from "react";
import { bind } from "../../../../../core/styles/bind";
import { Wish } from "../../../domain/entities/wish.entity";
import styles from "./wish-card.module.scss";
import { Button } from "../../../../../core/components/button/button.component";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../../../core/icons";
const cn = bind(styles);

interface Props {
  wish: Wish;
}

const MAX_IMAGE_WIDTH: number = 130;
const IMAGES_GAP: number = 8;

export const WishCard = (props: Props) => {
  const { wish } = props;
  const imagesList = useRef<HTMLUListElement>(null);
  const [maxScrollLeft, setMaxScrollLeft] = useState(
    imagesList.current?.scrollWidth
      ? imagesList.current?.scrollWidth - imagesList.current?.clientWidth
      : undefined
  );
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth <= 600);
  const [imagesListScroll, setImagesListScroll] = useState(0);

  const isVisibleImagesListLeftArrow: boolean = imagesListScroll !== 0;
  const isVisibleImagesListRightArrow: boolean =
    maxScrollLeft === undefined || maxScrollLeft > imagesListScroll;

  const SCROLL_SIZE: number =
    (MAX_IMAGE_WIDTH + IMAGES_GAP) * (isSmallDevice ? 2 : 3);

  const scrollOnImagesList = (direction: "RIGHT" | "LEFT") => {
    const scrollLeft = Math.max(imagesListScroll - SCROLL_SIZE, 0);
    const scrollRight = maxScrollLeft
      ? Math.min(imagesListScroll + SCROLL_SIZE, maxScrollLeft)
      : imagesListScroll + SCROLL_SIZE;
    const scroll = direction === "LEFT" ? scrollLeft : scrollRight;
    imagesList.current?.scroll(scroll, 0);
    setImagesListScroll(scroll);
  };

  useEffect(() => {
    setMaxScrollLeft(
      imagesList.current?.scrollWidth
        ? imagesList.current?.scrollWidth - imagesList.current?.clientWidth
        : undefined
    );
    setIsSmallDevice(window.innerWidth <= 600);
  }, [window.innerWidth]);

  return (
    <div className={cn("wish")}>
      <p className={cn("wish__name")}>{wish.name}</p>
      {wish.description && (
        <p className={cn("wish__description")}>{wish.description}</p>
      )}
      {wish.imageUrls && (
        <div className={cn("wish__images")}>
          {isVisibleImagesListLeftArrow && (
            <Button
              outlined
              onClick={() => scrollOnImagesList("LEFT")}
              className={cn(
                "wish__images__button",
                "wish__images__button--left"
              )}
            >
              <ArrowLeftIcon />
            </Button>
          )}
          <ul ref={imagesList} className={cn("wish__images__list")}>
            {wish.imageUrls.map((imageUrl) => (
              <li className={cn("wish__images__list__li")} key={imageUrl}>
                <img
                  className={cn("wish__images__list__li__img")}
                  src={imageUrl}
                />
              </li>
            ))}
          </ul>
          {isVisibleImagesListRightArrow && (
            <Button
              outlined
              onClick={() => scrollOnImagesList("RIGHT")}
              className={cn(
                "wish__images__button",
                "wish__images__button--right"
              )}
            >
              <ArrowRightIcon />
            </Button>
          )}
        </div>
      )}
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
