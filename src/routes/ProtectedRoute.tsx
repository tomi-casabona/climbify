import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthorized: boolean;
}

export const ProtectedRoute = ({ isAuthorized }: ProtectedRouteProps) => {
  return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};
