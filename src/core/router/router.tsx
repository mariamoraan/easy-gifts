import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./routes";
import { SignUpPage } from "../../features/auth/delivery/pages/sign-up/sign-up.page";
import { Home } from "../../features/home.page";
import { ProtectedRoutes } from "./protected-routes";
import { LoginPage } from "../../features/auth/delivery/pages/log-in/log-in.page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.SIGN_UP} element={<SignUpPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
