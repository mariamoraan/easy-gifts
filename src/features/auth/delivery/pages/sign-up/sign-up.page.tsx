import { useState } from "react";
import { bind } from "../../../../../core/styles/bind";
import styles from "./sign-up.module.scss";
import { useAuth } from "../../context/auth.context";
import { Navigate, NavLink } from "react-router-dom";
import { AppRoutes } from "../../../../../core/router/routes";
import { UserInfo } from "../../../domain/entities/user-info";
import { Credentials } from "../../../domain/entities/credentials";
import { Button } from "../../../../../core/components/button/button.component";
const cn = bind(styles);

export const SignUpPage = () => {
  const { signUp, user } = useAuth();
  const [userInfo, setUserInfo] = useState<UserInfo & Credentials>({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await signUp(userInfo, userInfo);
  };

  if (user?.id) return <Navigate to={AppRoutes.HOME} />;

  return (
    <div className={cn("page")}>
      <h1 className={cn("page__title")}>Create an account</h1>
      <p className={cn("page__text")}>
        Already have an account? <NavLink to={AppRoutes.LOGIN}>Login</NavLink>
      </p>
      <form onSubmit={onSubmit} className={cn("page__form")}>
        <label htmlFor="fname" className={cn("page__form__label")}>
          Nombre
        </label>
        <input
          id="fname"
          name="fname"
          className={cn("page__form__input")}
          type="text"
          placeholder="Name"
          value={userInfo?.name}
          onChange={(e) =>
            setUserInfo((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <label htmlFor="femail" className={cn("page__form__label")}>
          Email
        </label>
        <input
          id="femail"
          name="femail"
          className={cn("page__form__input")}
          type="email"
          placeholder="email@domain.com"
          value={userInfo?.email}
          onChange={(e) =>
            setUserInfo((prev) => ({ ...prev, email: e.target.value }))
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
          value={userInfo?.password}
          onChange={(e) =>
            setUserInfo((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <Button className={cn("page__form__submit-button")} type="submit">
          Create Account
        </Button>
      </form>
      <p className={cn("page__privacy-text")}>
        By clicking Create Account you agree to Wishlist <a>Terms of use</a> and{" "}
        <a>Privacy policy</a>
      </p>
    </div>
  );
};
