import { Route } from "../../../types/dataTypes";

export const calculateMidGrade = (routes: Route[]): number => {
	const completedRoutes = routes.filter((route: Route) => route.completed === true);
	const suma = completedRoutes.reduce(
		(acumulador, route) => {
			const grade = Number(route.routeGrade);
			return !isNaN(grade) ? acumulador + grade : acumulador;
		},
		0
	);
	const media = completedRoutes.length > 0 ? suma / completedRoutes.length : 0;

	return Math.floor(media);
};
