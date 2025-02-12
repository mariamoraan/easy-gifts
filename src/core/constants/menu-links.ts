import { User } from "../../features/auth/domain/entities/user";
import { CreateIcon, UserIcon, WishIcon } from "../icons";
import { AppRoutes } from "../router/routes";

export class MenuLinks {
  constructor(private readonly user: User) {}
  public getLinks() {
    return [
      { label: "wishes.your-wishes", href: AppRoutes.HOME, Icon: WishIcon },
      {
        label: "wishes.create-a-wish",
        href: AppRoutes.CREATE_WISH,
        Icon: CreateIcon,
      },
      {
        label: "user.your-profile",
        href: AppRoutes.PROFILE(this.user.id),
        Icon: UserIcon,
      },
    ];
  }
}
