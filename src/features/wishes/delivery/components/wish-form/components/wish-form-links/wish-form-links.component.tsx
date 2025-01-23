import { Button } from "../../../../../../../core/components/button/button.component";
import { Label } from "../../../../../../../core/components/label/label.component.";
import { PlusIcon } from "../../../../../../../core/icons";
import { bind } from "../../../../../../../core/styles/bind";
import { LinksList } from "../../../links-list/links-list.component";
import { useWishForm } from "../../context/wish-form.context";
import styles from "./wish-form-links.module.scss";
const cn = bind(styles);

export const WishFormLinks = () => {
  const { links, onDeleteLink, setIsLinksModalOpen } = useWishForm();

  return (
    <fieldset className={cn("links-fieldset")}>
      <Label className={cn("links-fieldset__label")}>Links</Label>
      {links.length ? (
        <LinksList links={links} onDeleteLink={onDeleteLink} />
      ) : (
        <p className={cn("links-fieldset__no-images")}>Sin Links</p>
      )}
      <Button
        type="button"
        name="Añadir link"
        className={cn("links-fieldset__add-button")}
        onClick={() => setIsLinksModalOpen(true)}
      >
        Añadir link
        <PlusIcon />
      </Button>
    </fieldset>
  );
};
