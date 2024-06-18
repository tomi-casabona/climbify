import { Route } from "../../../types/dataTypes";

export const calculateTotalHeight = (routes: Route[]): number => {
	const completedRoutes = routes.filter((route: Route) => route.completed === true);

	const accumulatedHeight: number = completedRoutes.reduce((accumulator: number, route: Route) => {
		const height = parseInt(route.routeHeight);

		return height + accumulator;
	}, 0);
	return accumulatedHeight;
};
