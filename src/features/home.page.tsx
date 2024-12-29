import { Button } from "../core/components/button/button.component";
import { LogoutIcon } from "../core/icons";
import { bind } from "../core/styles/bind";
import { useAuth } from "./auth/delivery/context/auth.context";
import styles from "./home.module.scss";
const cn = bind(styles);

export const Home = () => {
  const { logout, user } = useAuth();
  return (
    <div className={cn("page")}>
      <div className={cn("page__header")}>
        <p className={cn("page__header__title")}>Hello, {user?.name}</p>
        <p className={cn("page__header__subtitle")}>5 events this month</p>
        <div className={cn("page__header__action-bar")}>
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
    </div>
  );
};
