import { CreateIcon, WishIcon } from "../icons";
import { AppRoutes } from "../router/routes";

export const MENU_LINKS = [
  { label: "wishes.your-wishes", href: AppRoutes.HOME, Icon: WishIcon },
  {
    label: "wishes.create-a-wish",
    href: AppRoutes.CREATE_WISH,
    Icon: CreateIcon,
  },
];
