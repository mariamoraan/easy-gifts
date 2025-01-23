import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MENU_LINKS } from "../../constants/menu-links";
import { QuestionIcon, CloseIcon, MenuIcon } from "../../icons";
import { bind } from "../../styles/bind";

import styles from "./burger-menu.module.scss";
import { Button } from "../button/button.component";
import { useState } from "react";
import { useAuth } from "../../../features/auth/delivery/context/auth.context";
import { UserCard } from "../user-card/user-card.component";
const cn = bind(styles);

interface Props {
  className?: string;
}

export const BurgerMenu = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className={cn("burger-menu", className)}>
      <Button outlined onClick={toggleMenu}>
        <MenuIcon />
      </Button>
      <div
        className={cn("burger-menu__dropdown", {
          "burger-menu__dropdown--hidden": !isOpen,
        })}
      >
        <Button
          outlined
          onClick={toggleMenu}
          className={cn("burger-menu__dropdown__close-button")}
        >
          <CloseIcon />
        </Button>
        <ul className={cn("burger-menu__dropdown__links")}>
          {MENU_LINKS.map((link) => (
            <li
              className={cn("burger-menu__dropdown__links__li")}
              key={link.href}
            >
              <NavLink
                className={({ isActive }) =>
                  cn("burger-menu__dropdown__links__li__link", {
                    "burger-menu__dropdown__links__li__link--active": isActive,
                  })
                }
                to={link.href}
              >
                <link.Icon
                  className={cn("burger-menu__dropdown__links__li__link__icon")}
                />
                {t(link.label)}
              </NavLink>
            </li>
          ))}
        </ul>
        {user && <UserCard user={user} />}
        <div className={cn("burger-menu__dropdown__questions")}>
          <QuestionIcon />
          <p className={cn("burger-menu__dropdown__questions__text")}>
            Help and getting started
          </p>
          <span
            className={cn("burger-menu__dropdown__questions__notifications")}
          >
            8
          </span>
        </div>
      </div>
    </div>
  );
};
