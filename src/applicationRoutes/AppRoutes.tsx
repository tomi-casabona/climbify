import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Login } from "../pages/Login";
import { Signin } from "../pages/Signin";
import { Home } from "../pages/Home";
import { ProtectedRoute } from "./ProtectedRoute";
import { Formulario } from "../pages/Formulario";
import { RouteList } from "../pages/RouteList";
import { PublicRoute } from "./PublicRoute";
import { RoutePage } from "../pages/RoutePage";
import { Navbar } from "../components/Navbar";
import { EditRoute } from "../pages/EditRoute";
import { Stats } from "../pages/Stats";
import { UserPage } from "../pages/UserPage";

export const AppRoutes = ({ isLogged }: { isLogged: boolean }) => {
	const location = useLocation();
	const hideNavbarOnRoutePage = location.pathname.includes("/route/");
	const hideNavbarOnCreateRoutePage = location.pathname.includes("/newroute");

	return (
		<>
			{
				/* Oculta el Navbar si no está loggeado o si está en RoutePage */
				isLogged && !hideNavbarOnRoutePage && !hideNavbarOnCreateRoutePage && <Navbar />
			}
			<Routes>
				<Route element={<PublicRoute isAuthorized={isLogged} redirectToPath="/" />}>
					<Route path="/login" element={<Login />} />
					<Route path="/signin" element={<Signin />} />
				</Route>
				<Route element={<ProtectedRoute isAuthorized={isLogged} />}>
					<Route path="/" element={<Home />} />
					<Route path="/routes" element={<RoutesContainer />}>
						<Route path="route/:id" element={<RoutePage />} />
					</Route>
					<Route path="/editRoute" element={<EditRoute />} />
					<Route path="/newroute" element={<Formulario />} />
					<Route path="/stats" element={<Stats />} />
					<Route path="/user" element={<UserPage />} />
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
