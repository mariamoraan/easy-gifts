import { useState } from "react";
import { bind } from "../../../../../core/styles/bind";
import styles from "./sign-up.module.scss";
import { useAuth } from "../../context/auth.context";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "../../../../../core/router/routes";
import { UserInfo } from "../../../domain/entities/user-info";
import { Credentials } from "../../../domain/entities/credentials";
import { Button } from "../../../../../core/components/button/button.component";
import { useTranslation } from "react-i18next";
const cn = bind(styles);

export const SignUpPage = () => {
  const { t } = useTranslation();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState<UserInfo & Credentials>({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await signUp(userInfo, userInfo);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else {
        setError(t("auth.errors.generic"));
      }
    }
  };

  const isSubmitDisabled =
    !userInfo.email || !userInfo.password || !userInfo.name;

  return (
    <div className={cn("page")}>
      <h1 className={cn("page__title")}>
        {t("auth.sign-up.create-an-account")}
      </h1>
      <p className={cn("page__text")}>
        {t("auth.sign-up.already-have-an-account")}{" "}
        <NavLink to={AppRoutes.LOGIN}> {t("auth.sign-up.login")}</NavLink>
      </p>
      <form onSubmit={onSubmit} className={cn("page__form")}>
        <label htmlFor="fname" className={cn("page__form__label")}>
          {t("auth.name")}
        </label>
        <input
          id="fname"
          name="fname"
          className={cn("page__form__input")}
          type="text"
          placeholder={t("auth.name-placeholder")}
          value={userInfo?.name}
          onChange={(e) =>
            setUserInfo((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <label htmlFor="femail" className={cn("page__form__label")}>
          {t("auth.email")}
        </label>
        <input
          id="femail"
          name="femail"
          className={cn("page__form__input")}
          type="email"
          placeholder={t("auth.email-placeholder")}
          value={userInfo?.email}
          onChange={(e) =>
            setUserInfo((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <label htmlFor="fpassword" className={cn("page__form__label")}>
          {t("auth.password")}
        </label>
        <input
          id="fpassword"
          name="fpassword"
          className={cn("page__form__input")}
          type="password"
          value={userInfo?.password}
          onChange={(e) =>
            setUserInfo((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <Button
          disabled={isSubmitDisabled}
          className={cn("page__form__submit-button")}
          type="submit"
        >
          {t("auth.sign-up.create-account")}
        </Button>
      </form>
      {error && (
        <p className={cn("page__error")}> {t(`auth.errors.${error}`)}</p>
      )}
      <p className={cn("page__privacy-text")}>
        By clicking Create Account you agree to Wishlist <a>Terms of use</a> and{" "}
        <a>Privacy policy</a>
      </p>
    </div>
  );
};
