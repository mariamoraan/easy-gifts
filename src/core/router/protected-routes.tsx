import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../features/auth/delivery/context/auth.context";
import { AppRoutes } from "./routes";

export const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to={AppRoutes.LOGIN} />;
  return <Outlet />;
};
