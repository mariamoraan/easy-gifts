import { useParams } from "react-router-dom";
import { Avatar } from "../../../../../core/components/avatar/avatar.component";
import { Layout } from "../../../../../core/components/layout/layout.component";
import { useGetUser } from "../../../../auth/delivery/hooks/use-get-user/use-get-user.hook";
import { useFindWishes } from "../../../../wishes/delivery/hooks/use-find-wishes.hook";
import { WishList } from "../../../../wishes/delivery/components/wish-list/wish-list.component";
import styles from "./profile.module.scss";
import { bind } from "../../../../../core/styles/bind";
const cn = bind(styles);

export const ProfilePage = () => {
  const { userId } = useParams();
  const { user, isLoading } = useGetUser(userId);

  const { wishes } = useFindWishes({ userId: user?.id });

  if (isLoading) return <p>Loading</p>;
  if (!user) return <p>Este usuario no existe </p>;

  return (
    <Layout>
      <div className={cn("profile__avatar")}>
        <Avatar user={user} className={cn("profile__avatar__image")} />
        <p className={cn("profile__avatar__name")}>{user.name}</p>
        <p className={cn("profile__avatar__email")}>{user.email}</p>
      </div>
      <WishList wishes={wishes ?? []} />
    </Layout>
  );
};
