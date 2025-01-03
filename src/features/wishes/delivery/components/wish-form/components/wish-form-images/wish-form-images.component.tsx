import { Button } from "../../../../../../../core/components/button/button.component";
import { Input } from "../../../../../../../core/components/input/input.component";
import { Label } from "../../../../../../../core/components/label/label.component.";
import { ArrowRightIcon, ImageIcon } from "../../../../../../../core/icons";
import { bind } from "../../../../../../../core/styles/bind";
import { ImagesList } from "../../../images-list/images-list.component";
import { useWishForm } from "../../context/wish-form.context";
import styles from "./wish-form-images.module.scss";
const cn = bind(styles);

export const WishFormImages = () => {
  const { imageUrl, setImageUrl, onAddImage, imagesUrls, onDeleteImage } =
    useWishForm();

  return (
    <fieldset className={cn("images-fieldset")}>
      <legend className={cn("images-fieldset__legend")}>
        <ImageIcon /> Imágenes
      </legend>
      <Label htmlFor="fimage" className={cn("label")}>
        Dirección de imagen
      </Label>
      <Input
        id="fimage"
        name="fimage"
        type="text"
        placeholder="https://static.zara.net/assets/public/a04e/7d31/2e40485da29d/59cd9266788e/04548270712-p/04548270712-p.jpg?ts=1722345808444&w=1126"
        className={cn("input", "images-fieldset__input")}
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <Button
        type="button"
        onClick={() => onAddImage(imageUrl)}
        className={cn("images-fieldset__submit-button")}
        name="add image"
      >
        <ArrowRightIcon />
      </Button>
      {imagesUrls.length ? (
        <ImagesList
          imagesSize="SMALL"
          className={cn("images-fieldset__list")}
          imagesUrls={imagesUrls}
          onDelete={onDeleteImage}
        />
      ) : null}
    </fieldset>
  );
};
