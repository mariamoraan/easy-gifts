import { useState } from "react";
import { bind } from "../../../../../core/styles/bind";
import styles from "./log-in.module.scss";
import { useAuth } from "../../context/auth.context";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "../../../../../core/router/routes";
import { Credentials } from "../../../domain/entities/credentials";
import { Button } from "../../../../../core/components/button/button.component";
import { useTranslation } from "react-i18next";
const cn = bind(styles);

export const LoginPage = () => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await login(credentials);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else {
        setError(t("auth.errors.generic"));
      }
    }
  };

  const isSubmitDisabled = !credentials.email || !credentials.password;

  return (
    <div className={cn("page")}>
      <h1 className={cn("page__title")}> {t("auth.login.welcome")}</h1>
      <p className={cn("page__text")}>
        {t("auth.login.not-have-an-account")}{" "}
        <NavLink to={AppRoutes.SIGN_UP}>{t("auth.login.sign-up")}</NavLink>
      </p>
      <form onSubmit={onSubmit} className={cn("page__form")}>
        <label htmlFor="femail" className={cn("page__form__label")}>
          {t("auth.email")}
        </label>
        <input
          id="femail"
          name="femail"
          className={cn("page__form__input")}
          type="email"
          value={credentials?.email}
          placeholder={t("auth.email-placeholder")}
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, email: e.target.value }))
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
          value={credentials?.password}
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <Button
          disabled={isSubmitDisabled}
          className={cn("page__form__submit-button")}
          type="submit"
        >
          {t("auth.login.continue")}
        </Button>
      </form>
      {error && (
        <p className={cn("page__error")}> {t(`auth.errors.${error}`)}</p>
      )}
      <p className={cn("page__privacy-text")}>
        {t("auth.login.forgot-credentials")}{" "}
        <NavLink to={AppRoutes.RECOVER_PASSWORD}>
          {" "}
          {t("auth.login.recover-password")}
        </NavLink>
      </p>
    </div>
  );
};
