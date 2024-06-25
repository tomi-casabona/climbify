import { Navigate, Outlet } from "react-router-dom";

interface PublicRouteProps {
  isAuthorized: boolean;
  redirectToPath: string;
}

export const PublicRoute = ({ isAuthorized, redirectToPath }: PublicRouteProps) => {
  return isAuthorized ? <Navigate to={redirectToPath} /> : <Outlet />;
};
