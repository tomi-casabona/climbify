import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Login } from "../pages/Login";
import { Signin } from "../pages/Signin";
import { Home } from "../pages/Home";
import { ProtectedRoute } from "./ProtectedRoute";
import { Formulario } from "../components/Formulario";
import { RouteList } from "../pages/RouteList";
import { PublicRoute } from "./PublicRoute";
import { RoutePage } from "../pages/RoutePage";
import { Navbar } from "../components/Navbar";

export const AppRoutes = ({ isLogged }: { isLogged: boolean }) => {
	const location = useLocation();
	const hideNavbar = location.pathname.includes("/route/");

	return (
		<>
			{
				/* Oculta el Navbar si no está loggeado o si está en RoutePage */
				isLogged && !hideNavbar && <Navbar />
			}
			<Routes>
				<Route
					element={<PublicRoute isAuthorized={isLogged} redirectToPath="/" />}
				>
					<Route path="/login" element={<Login />} />
					<Route path="/signin" element={<Signin />} />
				</Route>
				<Route element={<ProtectedRoute isAuthorized={isLogged} />}>
					<Route path="/" element={<Home />} />
					<Route path="/routes" element={<RoutesContainer />}>
						<Route path="route/:id" element={<RoutePage />} />
					</Route>
					<Route path="/newroute" element={<Formulario />} />
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
};

const RoutesContainer = () => {
	return (
		<>
			<RouteList />
			<Outlet />
		</>
	);
};
