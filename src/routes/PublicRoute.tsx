import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PublicRouteProps {
	isAuthorized: boolean;
	redirectToPath?: string;
}

export const PublicRoute = ({
	isAuthorized,
	redirectToPath = "/",
}: PublicRouteProps): ReactElement => {
	if (isAuthorized) {
		return <Navigate to={redirectToPath} replace />;
	}
	return <Outlet />;
};
