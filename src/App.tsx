import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "./redux/thunks/locationsThunks";
import { fetchSchools } from "./redux/thunks/schoolsThunks";
import { fetchSectors } from "./redux/thunks/sectorsThunks";
import { fetchRoutes } from "./redux/thunks/routesThunks";
import { AppDispatch } from "./redux/store";
import { RootState } from "./redux/store";

export const App: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { locations, schools, sectors, routes } = useSelector(
		(state: RootState) => state
	);

	useEffect(() => {
		if (locations.status === "idle") {
			dispatch(fetchLocations());
		}
		if (schools.status === "idle") {
			dispatch(fetchSchools());
		}
		if (sectors.status === "idle") {
			dispatch(fetchSectors());
		}
		if (routes.status === "idle") {
			dispatch(fetchRoutes());
		}
	});
	console.log(locations, schools, sectors, routes);

	return (
		<Router>
			<Navbar />
			<AppRoutes />
		</Router>
	);
};
