import { bind } from "../../../../../../../core/styles/bind";
import { Input } from "../../../../../../../core/components/input/input.component";
import { Label } from "../../../../../../../core/components/label/label.component.";
import { useWishForm } from "../../context/wish-form.context";
import styles from "./wish-form-images-modal.module.scss";
import { Button } from "../../../../../../../core/components/button/button.component";
import { ArrowRightIcon } from "../../../../../../../core/icons";
import { Modal } from "../../../../../../../core/components/modal/modal.component";
const cn = bind(styles);

export const WishFormImagesModal = () => {
  const {
    imageUrl,
    setImageUrl,
    onAddImage,
    isImagesModalOpen,
    setIsImagesModalOpen,
  } = useWishForm();
  return (
    <Modal
      isOpen={isImagesModalOpen}
      onClose={() => setIsImagesModalOpen(false)}
    >
      <form
        className={cn("wish-form-images-modal")}
        onSubmit={(e) => {
          e.preventDefault();
          onAddImage(imageUrl);
        }}
      >
        <Label htmlFor="fimage" className={cn("wish-form-images-modal__label")}>
          Dirección de imagen
        </Label>
        <Input
          id="fimage"
          name="fimage"
          type="text"
          placeholder="https://static.zara.net/assets/public/a04e/7d31/2e40485da29d/59cd9266788e/04548270712-p/04548270712-p.jpg?ts=1722345808444&w=1126"
          className={cn("wish-form-images-modal__input")}
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <Button
          type="submit"
          className={cn("wish-form-images-modal__submit")}
          name="add image"
        >
          <ArrowRightIcon />
        </Button>
      </form>
    </Modal>
  );
};
