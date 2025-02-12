import { Button } from "../../../../../../../core/components/button/button.component";
import { Label } from "../../../../../../../core/components/label/label.component.";
import { PlusIcon } from "../../../../../../../core/icons";
import { bind } from "../../../../../../../core/styles/bind";
import { ImagesList } from "../../../images-list/images-list.component";
import { useWishForm } from "../../context/wish-form.context";
import styles from "./wish-form-images.module.scss";
const cn = bind(styles);

export const WishFormImages = () => {
  const { imagesUrls, onDeleteImage, setIsImagesModalOpen } = useWishForm();

  return (
    <fieldset className={cn("images-fieldset")}>
      <Label className={cn("images-fieldset__label")}>Imágenes</Label>
      {imagesUrls.length ? (
        <ImagesList
          imagesSize="SMALL"
          className={cn("images-fieldset__list")}
          imagesUrls={imagesUrls}
          onDelete={onDeleteImage}
        />
      ) : (
        <p className={cn("images-fieldset__no-images")}>Sin Imágenes</p>
      )}
      <Button
        name="Añadir imagen"
        type="button"
        className={cn("images-fieldset__add-button")}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          setIsImagesModalOpen(true);
        }}
      >
        Añadir imagen
        <PlusIcon />
      </Button>
    </fieldset>
  );
};
