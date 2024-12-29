import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./routes";
import { SignUpPage } from "../../features/auth/delivery/pages/sign-up/sign-up.page";
import { Home } from "../../features/home.page";
import { ProtectedRoutes } from "./protected-routes";
import { LoginPage } from "../../features/auth/delivery/pages/log-in/log-in.page";
import { RecoverPasswordPage } from "../../features/auth/delivery/pages/recover-password/recover-password.page";
import { AuthRoutes } from "./auth-routes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoutes />}>
          <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
          <Route path={AppRoutes.SIGN_UP} element={<SignUpPage />} />
          <Route
            path={AppRoutes.RECOVER_PASSWORD}
            element={<RecoverPasswordPage />}
          />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
