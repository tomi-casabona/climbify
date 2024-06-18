import type { Route } from "../../../types/dataTypes";

export const calculateCompletedRoutes = (routes: Route[]): number => {
	console.log(routes);
	const completedRoutes = routes.filter((route: Route) => route.completed === true);
	console.log(completedRoutes);
	const total: number = completedRoutes.length;
	return total;
};
