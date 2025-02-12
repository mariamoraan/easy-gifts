import { useTranslation } from "react-i18next";
import { useAuth } from "./auth/delivery/context/auth.context";
import { WishList } from "./wishes/delivery/components/wish-list/wish-list.component";
import { Layout } from "../core/components/layout/layout.component";
import { useFindWishes } from "./wishes/delivery/hooks/use-find-wishes.hook";

export const Home = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { wishes } = useFindWishes({ userId: user?.id });
  return (
    <Layout title={t("home.greeting", { name: user?.name })}>
      <WishList wishes={wishes ?? []} />
    </Layout>
  );
};
