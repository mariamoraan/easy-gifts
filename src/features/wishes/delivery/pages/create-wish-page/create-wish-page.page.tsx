import { NavLink, useNavigate } from "react-router-dom";
import { bind } from "../../../../../core/styles/bind";
import styles from "./create-wish-page.module.scss";
import { AppRoutes } from "../../../../../core/router/routes";
import { Button } from "../../../../../core/components/button/button.component";
import {
  ArrowRightIcon,
  ImageIcon,
  LinkIcon,
  LogoutIcon,
} from "../../../../../core/icons";
import { useAuth } from "../../../../auth/delivery/context/auth.context";
import { ImagesList } from "../../components/images-list/images-list.component";
import { useState } from "react";
import { Wish } from "../../../domain/entities/wish.entity";
import { useCreateWish } from "../../hooks/use-create-wish.hook";
const cn = bind(styles);

export const CreateWishPage = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const { createWish } = useCreateWish();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imagesUrls, setImagesUrls] = useState<string[]>([]);

  const onDeleteImage = (imageUrl: string) => {
    setImagesUrls((prev) => prev.filter((url) => imageUrl !== url));
  };
  const onAddImage = (imageUrl?: string) => {
    if (!imageUrl) return;
    setImagesUrls((prev) => [
      ...prev.filter((url) => url !== imageUrl),
      imageUrl,
    ]);
    setImageUrl("");
  };

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!user?.id) return;
    if (!name) return;
    const newWish: Omit<Wish, "id"> = {
      name,
      description,
      owner: user?.id,
      imagesUrls,
    };
    createWish(newWish);
  };

  const onCancel = () => navigate(AppRoutes.HOME);

  return (
    <div className={cn("page")}>
      <div className={cn("page__header")}>
        <p className={cn("page__header__title")}>Create a Wish</p>
        <div className={cn("page__header__action-bar")}>
          <NavLink to={AppRoutes.HOME}>Home</NavLink>
          <Button
            className={cn("page__header__action-bar__button")}
            outlined
            onClick={logout}
            name="Logout"
          >
            <LogoutIcon />
          </Button>
        </div>
      </div>
      <div>
        <form onSubmit={onSubmit} className={cn("wish-form")}>
          <label htmlFor="fname" className={cn("wish-form__label")}>
            Nombre
          </label>
          <input
            id="fname"
            name="fname"
            type="text"
            placeholder="Collar cordón flor"
            className={cn("wish-form__input")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="fdescription" className={cn("wish-form__label")}>
            Descripción
          </label>
          <textarea
            id="fdescription"
            name="fdescription"
            className={cn("wish-form__input", "wish-form__textarea")}
            placeholder="Collar de cordón con flor combinada en tejido."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <fieldset className={cn("wish-form__images-fieldset")}>
            <legend className={cn("wish-form__images-fieldset__legend")}>
              <ImageIcon /> Imágenes
            </legend>
            <label htmlFor="fimage" className={cn("wish-form__label")}>
              Dirección de imagen
            </label>
            <input
              id="fimage"
              name="fimage"
              type="text"
              placeholder="https://static.zara.net/assets/public/a04e/7d31/2e40485da29d/59cd9266788e/04548270712-p/04548270712-p.jpg?ts=1722345808444&w=1126"
              className={cn(
                "wish-form__input",
                "wish-form__images-fieldset__input"
              )}
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <Button
              type="button"
              onClick={() => onAddImage(imageUrl)}
              className={cn("wish-form__images-fieldset__submit-button")}
            >
              <ArrowRightIcon />
            </Button>
            {imagesUrls.length ? (
              <ImagesList
                imagesSize="SMALL"
                className={cn("wish-form__images-fieldset__list")}
                imagesUrls={imagesUrls}
                onDelete={onDeleteImage}
              />
            ) : null}
          </fieldset>
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
      </div>
    </div>
  );
};
