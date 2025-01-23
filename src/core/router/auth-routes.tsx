import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../features/auth/delivery/context/auth.context";
import { AppRoutes } from "./routes";

export const AuthRoutes = () => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to={AppRoutes.HOME} />;
  return <Outlet />;
};
