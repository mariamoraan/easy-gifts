import { User } from "../../../features/auth/domain/entities/user";
import { bind } from "../../styles/bind";
import styles from "./avatar.module.scss";
const cn = bind(styles);

interface Props {
  user: User;
  className?: string;
  size?: "SMALL" | "MEDIUM" | "BIG";
}

export const Avatar = (props: Props) => {
  const { user, className, size = "MEDIUM" } = props;
  const getInitials = (name: string) =>
    name
      .split(" ")
      .slice(0, 2)
      .map((word) => word[0])
      .join("");
  return (
    <div
      className={cn("avatar", { "avatar--small": size === "SMALL" }, className)}
    >
      {getInitials(user.name)}
    </div>
  );
};
