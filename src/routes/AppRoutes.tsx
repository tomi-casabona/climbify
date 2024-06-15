import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Signin } from "../pages/Signin";
import { Home } from "../pages/Home";
import { ProtectedRoute } from "./ProtectedRote";
import { Formulario } from "../components/Formulario";
import { RouteList } from "../pages/RouteList";
import { PublicRoute } from "./PublicRoute";

export const AppRoutes = ({ isLogged }: { isLogged: boolean }) => {
	return (
		<Routes>
			<Route
				element={<PublicRoute isAuthorized={isLogged} redirectToPath="/" />}
			>
				<Route path="/login" element={<Login />} />
				<Route path="/signin" element={<Signin />} />
			</Route>
			<Route element={<ProtectedRoute isAuthorized={isLogged} />}>
				<Route path="/" element={<Home />} />
				<Route path="/routes" element={<RouteList />} />
				<Route path="/newroute" element={<Formulario />} />
			</Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};
