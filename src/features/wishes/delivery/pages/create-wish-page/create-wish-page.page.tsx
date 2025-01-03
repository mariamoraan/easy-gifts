import { NavLink } from "react-router-dom";
import { bind } from "../../../../../core/styles/bind";
import styles from "./create-wish-page.module.scss";
import { AppRoutes } from "../../../../../core/router/routes";
import { Button } from "../../../../../core/components/button/button.component";
import { LogoutIcon } from "../../../../../core/icons";
import { useAuth } from "../../../../auth/delivery/context/auth.context";
import WishForm from "../../components/wish-form/wish-form.component";
const cn = bind(styles);

export const CreateWishPage = () => {
  const { logout } = useAuth();

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
        <WishForm />
      </div>
    </div>
  );
};
