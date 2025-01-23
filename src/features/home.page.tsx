import { useTranslation } from "react-i18next";
import { useAuth } from "./auth/delivery/context/auth.context";
import { WishList } from "./wishes/delivery/components/wish-list/wish-list.component";
import { Layout } from "../core/components/layout/layout.component";

export const Home = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  return (
    <Layout
      title={t("home.greeting", { name: user?.name })}
      description={t("home.events-summary", { eventsNumber: 5 })}
    >
      <WishList />
    </Layout>
  );
};
