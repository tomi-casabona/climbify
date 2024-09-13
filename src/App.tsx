import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./applicationRoutes/AppRoutes";
import { useDispatch } from "react-redux";
import { auth } from "./firebase/firebase-config";
import { AppDispatch } from "./redux/store";
import { fetchLocations } from "./redux/thunks/locationsThunks";
import { fetchSchools } from "./redux/thunks/schoolsThunks";
import { fetchSectors } from "./redux/thunks/sectorsThunks";
import { fetchRoutes } from "./redux/thunks/routesThunks";
import { setUser } from "./redux/slices/userSlice";
import { getUserData } from "./services/getUserData";
import ScaleProvider from "./context/gradeContext";
import { ThemeProvider } from "./context/themeContext";

export const App: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [isLogged, setIsLogged] = useState<boolean>(false);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setIsLogged(!!user);
			if (user) {
				const userData = getUserData(user);
				dispatch(fetchLocations());
				dispatch(fetchSchools());
				dispatch(fetchSectors());
				dispatch(fetchRoutes());
				dispatch(setUser(userData));
			}
		});

		return () => unsubscribe();
	}, [dispatch]);

	return (
		<Router>
			<ThemeProvider>
				<ScaleProvider>
					<div className="mx-auto font-tt-hoves h-screen">
						<AppRoutes isLogged={isLogged} />
					</div>
				</ScaleProvider>
			</ThemeProvider>
		</Router>
	);
};
