import { Attempt, Route } from "../../../types/dataTypes";

export const filterLastSevenRoutes = (routes: Route[]): Route[] => {
	const currentDate = new Date();
	const sevenDaysAgo = new Date();
	sevenDaysAgo.setDate(currentDate.getDate() - 7);

	const filteredRoutes = routes.filter((route) => {
		// Filtrar rutas que tienen al menos un intento y que el intento sea de los últimos 7 días
		return route.routeAttempts.some((attempt: Attempt) => {
			const attemptDate = new Date(attempt.date);
			return attemptDate >= sevenDaysAgo && attemptDate <= currentDate;
		});
	});

	return filteredRoutes;
};
