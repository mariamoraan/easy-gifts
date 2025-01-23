import React from "react";
import { bind } from "../../styles/bind";
import { SideMenu } from "../side-menu/side-menu.component";
import styles from "./layout.module.scss";
import { BurgerMenu } from "../burger-menu/burger-menu.component";
import { useDeviceInfo } from "../../hooks/use-device-info/use-device-info.hook";
const cn = bind(styles);

interface Props {
  children: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export const Layout = (props: Props) => {
  const { children, title, description } = props;
  const { deviceSize } = useDeviceInfo();
  return (
    <div className={cn("layout")}>
      {deviceSize === "BIG" ? (
        <SideMenu className={cn("layout__side-menu")} />
      ) : null}
      <main className={cn("layout__main")}>
        <header className={cn("layout__header")}>
          <p className={cn("layout__header__title")}>{title}</p>
          <p className={cn("layout__header__subtitle")}>{description}</p>
          {deviceSize !== "BIG" ? (
            <BurgerMenu className={cn("layout__burger-menu")} />
          ) : null}
        </header>
        <div className={cn("layout__content")}>{children}</div>
      </main>
    </div>
  );
};
