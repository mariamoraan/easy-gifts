import { Link, useParams } from "react-router-dom";
import { Layout } from "../../../../../core/components/layout/layout.component";
import { bind } from "../../../../../core/styles/bind";
import { useFindWish } from "../../hooks/use-find-wish.hook";
import styles from "./wish.module.scss";
import { AppRoutes } from "../../../../../core/router/routes";
import { ArrowLeftIcon } from "../../../../../core/icons";
import { useAuth } from "../../../../auth/delivery/context/auth.context";
import { ImagesList } from "../../components/images-list/images-list.component";
const cn = bind(styles);

export const WishPage = () => {
  const { wishId } = useParams();
  const { wish, isLoading } = useFindWish(wishId);
  const { user } = useAuth();

  if (isLoading) return <p>Loading...</p>;
  if (!wish || !user) return <p>No wish</p>;

  return (
    <Layout
      title={
        <Link className={cn("top-link")} to={AppRoutes.HOME}>
          <ArrowLeftIcon />
          <p>Todos</p>
        </Link>
      }
    >
      <div className={cn("wish")}>
        <div className={cn("wish__header")}>
          <h3 className={cn("wish__header__title")}>{wish.name}</h3>
          {wish.links?.length ? (
            <div className={cn("wish__header__table")}>
              {wish.links?.map((link) => (
                <div className={cn("wish__header__table__row")}>
                  <p className={cn("wish__header__table__row__label")}>
                    {link.name}
                  </p>
                  <a
                    href={link.url}
                    className={cn("wish__header__table__row__value")}
                    target="_blank"
                  >
                    {link.url}
                  </a>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className={cn("wish__content")}>
          <p className={cn("wish__content__description")}>{wish.description}</p>
          {wish.imagesUrls?.length ? (
            <ImagesList imagesUrls={wish.imagesUrls} />
          ) : null}
        </div>
      </div>
    </Layout>
  );
};
