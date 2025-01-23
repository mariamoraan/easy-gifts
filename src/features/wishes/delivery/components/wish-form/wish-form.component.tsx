import { PropsWithChildren } from "react";
import styles from "./wish-form.module.scss";
import { bind } from "../../../../../core/styles/bind";
import { Button } from "../../../../../core/components/button/button.component";
import { useWishForm } from "./context/wish-form.context";
import WishFormName from "./components/wish-form-name/wish-form-name.component";
import WishFormDescription from "./components/wish-form-description/wish-form-description.component";
import { WishFormImages } from "./components/wish-form-images/wish-form-images.component";
import { WishFormLinks } from "./components/wish-form-links/wish-form-links.component";
import { WishFormImagesModal } from "./components/wish-form-images-modal/wish-form-images-modal.component";
import { WishFormLinksModal } from "./components/wish-form-links-modal/wish-form-links-modal.component";
const cn = bind(styles);

const WishForm = ({ children }: PropsWithChildren) => {
  const { onSubmit, onCancel } = useWishForm();

  return (
    <>
      <form
        data-testid="wish-form"
        onSubmit={onSubmit}
        className={cn("wish-form")}
      >
        {children}
        <div className={cn("wish-form__buttons")}>
          <Button
            importance="secondary"
            className={cn("wish-form__submit-button")}
            type="button"
            onClick={onCancel}
          >
            Cancelar
          </Button>
          <Button className={cn("wish-form__submit-button")} type="submit">
            Crear Deseo
          </Button>
        </div>
      </form>
      <WishFormImagesModal />
      <WishFormLinksModal />
    </>
  );
};

export default WishForm;
WishForm.Name = WishFormName;
WishForm.Description = WishFormDescription;
WishForm.Images = WishFormImages;
WishForm.Links = WishFormLinks;
