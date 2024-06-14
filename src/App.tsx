import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./redux/thunks/locationsThunks";
import { AppDispatch } from "./redux/store";
import { RootState } from "./redux/store";

export const App: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const userData = useSelector((state: RootState) => state.userData);

	useEffect(() => {
		if (userData.status === "idle") {
			dispatch(fetchUserData());
		}
	});
	console.log(userData);

	return (
		<Router>
			<Navbar />
			<AppRoutes />
		</Router>
	);
};
