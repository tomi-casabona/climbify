import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthorized: boolean;
  redirectToPath?: string;
}
// Update the ProtectedRoute component to accept the defined props
export const ProtectedRoute = ({
  isAuthorized,
  redirectToPath = "/",
}: ProtectedRouteProps): ReactElement => {
  if (!isAuthorized) {
    return <Navigate to={redirectToPath} replace />;
  }
  return <Outlet />;
};
