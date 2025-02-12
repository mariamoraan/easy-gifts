import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { bind } from "../../styles/bind";
import { useAuth } from "../../../features/auth/delivery/context/auth.context";
import { Button } from "../button/button.component";
import styles from "./side-menu.module.scss";
import { LogoutIcon } from "../../icons";
import { MenuLinks } from "../../constants/menu-links";
const cn = bind(styles);

interface Props {
  className?: string;
}

export const SideMenu = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { logout, user } = useAuth();

  if (!user) return null;
  const menuLinks = new MenuLinks(user);

  return (
    <menu className={cn("side-menu", className)}>
      <div className={cn("side-menu__header")}>
        <h2 className={cn("side-menu__header__title")}>Wishes</h2>
        <p className={cn("side-menu__header__version")}>v0.1</p>
      </div>
      <ul className={cn("side-menu__links")}>
        {menuLinks.getLinks().map((link) => (
          <li className={cn("side-menu__links__li")} key={link.href}>
            <NavLink
              className={({ isActive }) =>
                cn("side-menu__links__li__link", {
                  "side-menu__links__li__link--active": isActive,
                })
              }
              to={link.href}
            >
              <link.Icon className={cn("side-menu__links__li__link__icon")} />
              {t(link.label)}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={cn("side-menu__actions")}>
        <Button
          outlined
          className={cn("side-menu__actions__action")}
          onClick={logout}
          name="Logout"
        >
          <LogoutIcon /> Logout
        </Button>
      </div>
    </menu>
  );
};
