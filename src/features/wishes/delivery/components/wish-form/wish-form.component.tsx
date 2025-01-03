import { PropsWithChildren } from "react";
import styles from "./wish-form.module.scss";
import { bind } from "../../../../../core/styles/bind";
import { LinkIcon } from "../../../../../core/icons";
import { Button } from "../../../../../core/components/button/button.component";
import { useWishForm } from "./context/wish-form.context";
import WishFormName from "./components/wish-form-name/wish-form-name.component";
import WishFormDescription from "./components/wish-form-description/wish-form-description.component";
import { WishFormImages } from "./components/wish-form-images/wish-form-images.component";
const cn = bind(styles);

const WishForm = ({ children }: PropsWithChildren) => {
  const { onSubmit, onCancel } = useWishForm();

  return (
    <form
      data-testid="wish-form"
      onSubmit={onSubmit}
      className={cn("wish-form")}
    >
      {children}

      <fieldset className={cn("wish-form__images-fieldset")}>
        <legend className={cn("wish-form__images-fieldset__legend")}>
          <LinkIcon /> Links
        </legend>
      </fieldset>
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
  );
};

export default WishForm;
WishForm.Name = WishFormName;
WishForm.Description = WishFormDescription;
WishForm.Images = WishFormImages;
