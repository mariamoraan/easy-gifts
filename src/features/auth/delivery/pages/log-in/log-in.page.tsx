import { useState } from "react";
import { bind } from "../../../../../core/styles/bind";
import styles from "./log-in.module.scss";
import { useAuth } from "../../context/auth.context";
import { Navigate, NavLink } from "react-router-dom";
import { AppRoutes } from "../../../../../core/router/routes";
import { Credentials } from "../../../domain/entities/credentials";
const cn = bind(styles);

export const LoginPage = () => {
  const { login, user } = useAuth();
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await login(credentials);
  };

  if (user?.id) return <Navigate to={AppRoutes.HOME} />;

  return (
    <div className={cn("page")}>
      <h1>Login</h1>
      <form onSubmit={onSubmit} className={cn("page__form")}>
        <label htmlFor="femail" className={cn("page__form__label")}>
          Email
        </label>
        <input
          id="femail"
          name="femail"
          className={cn("page__form__input")}
          type="email"
          value={credentials?.email}
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <label htmlFor="fpassword" className={cn("page__form__label")}>
          Password
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
        <button className={cn("page__form__submit-button")} type="submit">
          Submit
        </button>
      </form>
      <NavLink to={AppRoutes.SIGN_UP}>Sign Up</NavLink>
    </div>
  );
};
