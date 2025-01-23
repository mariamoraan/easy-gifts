import { User } from "../../../features/auth/domain/entities/user";
import { bind } from "../../styles/bind";
import { Avatar } from "../avatar/avatar.component";
import styles from "./user-card.module.scss";
const cn = bind(styles);

interface Props {
  user: User;
}

export const UserCard = (props: Props) => {
  const { user } = props;

  return (
    <div className={cn("user-card")}>
      <Avatar user={user} className={cn("user-card__avatar")} />
      <p className={cn("user-card__title")}>{user.name}</p>
      <p className={cn("user-card__email")}>{user.email}</p>
    </div>
  );
};
