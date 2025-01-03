import { NavLink } from "react-router-dom";
import { bind } from "../../../../../core/styles/bind";
import styles from "./recover-password.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "../../../../../core/components/button/button.component";
import { useState } from "react";
import { AppRoutes } from "../../../../../core/router/routes";
import { AuthLocator } from "../../auth.locator";
const cn = bind(styles);

export const RecoverPasswordPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [processState, setProcessState] = useState<
    "PENDANT" | "ERROR" | "SUCCESS"
  >("PENDANT");

  const isSubmitDisabled = !email;

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await AuthLocator.getRecoverPasswordQuery().handle(email);
      setProcessState("SUCCESS");
      setEmail("");
    } catch (error) {
      setProcessState("ERROR");
    }
  };

  return (
    <div className={cn("page")}>
      <h1 className={cn("page__title")}>
        {" "}
        {t("auth.recover-password.problems-to-login")}
      </h1>
      <p className={cn("page__text", "page__text--center")}>
        {t("auth.recover-password.introduce-your-email")}
      </p>
      <form onSubmit={onSubmit} className={cn("page__form")}>
        <label htmlFor="femail" className={cn("page__form__label")}>
          {t("auth.email")}
        </label>
        <input
          id="femail"
          name="femail"
          aria-label="femail"
          className={cn("page__form__input")}
          type="email"
          value={email}
          placeholder={t("auth.email-placeholder")}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          className={cn("page__form__submit-button")}
          type="submit"
          disabled={isSubmitDisabled}
        >
          {t("auth.recover-password.send-access-link")}
        </Button>
      </form>
      {processState === "ERROR" && (
        <p className={cn("page__error")}> {t(`auth.errors.generic`)}</p>
      )}
      {processState === "SUCCESS" && (
        <p className={cn("page__text", "page__text--center", "page__success")}>
          {t("auth.recover-password.success", { email })}
        </p>
      )}
      <NavLink className={cn("page__privacy-text")} to={AppRoutes.LOGIN}>
        {t("auth.recover-password.go-to-login")}
      </NavLink>
    </div>
  );
};
