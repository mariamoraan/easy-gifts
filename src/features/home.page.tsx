import { useTranslation } from "react-i18next";
import { Button } from "../core/components/button/button.component";
import { LogoutIcon } from "../core/icons";
import { bind } from "../core/styles/bind";
import { useAuth } from "./auth/delivery/context/auth.context";
import styles from "./home.module.scss";
import { useFindWishes } from "./wishes/delivery/hooks/use-find-wishes.hook";
import { WishCard } from "./wishes/delivery/components/wish-card/wish-card.component";
const cn = bind(styles);

export const Home = () => {
  const { t } = useTranslation();
  const { logout, user } = useAuth();
  const { wishes } = useFindWishes();
  return (
    <div className={cn("page")}>
      <div className={cn("page__header")}>
        <p className={cn("page__header__title")}>
          {t("home.greeting", { name: user?.name })}
        </p>
        <p className={cn("page__header__subtitle")}>
          {t("home.events-summary", { eventsNumber: 5 })}
        </p>
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
      <div className={cn("wishes")}>
        <ul className={cn("wishes__list")}>
          {wishes?.map((wish) => (
            <li key={wish.id}>
              <WishCard wish={wish} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
