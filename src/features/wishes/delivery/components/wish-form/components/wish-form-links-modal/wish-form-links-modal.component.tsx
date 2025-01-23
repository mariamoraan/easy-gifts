import { bind } from "../../../../../../../core/styles/bind";
import { Input } from "../../../../../../../core/components/input/input.component";
import { Label } from "../../../../../../../core/components/label/label.component.";
import { useWishForm } from "../../context/wish-form.context";
import styles from "./wish-form-links-modal.module.scss";
import { Button } from "../../../../../../../core/components/button/button.component";
import { ArrowRightIcon } from "../../../../../../../core/icons";
import { Modal } from "../../../../../../../core/components/modal/modal.component";
const cn = bind(styles);

export const WishFormLinksModal = () => {
  const { link, setLink, onAddLink, isLinksModalOpen, setIsLinksModalOpen } =
    useWishForm();
  return (
    <Modal isOpen={isLinksModalOpen} onClose={() => setIsLinksModalOpen(false)}>
      <form
        className={cn("wish-form-links-modal")}
        onSubmit={(e) => {
          e.preventDefault();
          onAddLink(link);
        }}
      >
        <Label htmlFor="furl" className={cn("wish-form-links-modal__label")}>
          Url
        </Label>
        <Input
          id="furl"
          name="furl"
          type="text"
          placeholder="https://static.zara.net/assets/public/a04e/7d31/2e40485da29d/59cd9266788e/04548270712-p/04548270712-p.jpg?ts=1722345808444&w=1126"
          className={cn("wish-form-links-modal__input")}
          value={link?.url}
          onChange={(e) =>
            setLink((prev) =>
              prev
                ? { ...prev, url: e.target.value }
                : { name: "", url: e.target.value }
            )
          }
        />
        <Label htmlFor="fname" className={cn("wish-form-links-modal__label")}>
          Nombre
        </Label>
        <Input
          id="fname"
          name="fname"
          type="text"
          placeholder="Falda H&M"
          className={cn("wish-form-links-modal__input")}
          value={link?.name}
          onChange={(e) =>
            setLink((prev) =>
              prev
                ? { ...prev, name: e.target.value }
                : { name: e.target.value, url: "" }
            )
          }
        />
        <Button
          type="submit"
          className={cn("wish-form-links-modal__submit")}
          name="add link"
        >
          Añadir Link
          <ArrowRightIcon />
        </Button>
      </form>
    </Modal>
  );
};
