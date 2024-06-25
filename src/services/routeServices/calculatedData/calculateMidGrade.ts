import { Route } from "../../../types/dataTypes";

export const calculateMidGrade = (routes: Route[]): number => {
	const completedRoutes = routes.filter((route: Route) => route.completed === true);
	const suma = completedRoutes.reduce(
		(acumulador, route) => parseInt(acumulador) + parseInt(route.routeGrade), // Solucionar problema de tipo
		0
	);
	const media = suma / completedRoutes.length;

	return Math.floor(media);
};
