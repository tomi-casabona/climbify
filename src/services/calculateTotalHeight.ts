import type { Route } from "../types/dataTypes";

export const calculateTotalHeight = (routes: Route[]): number => {

    const completedRoutes = routes.filter((route: Route) => route.completed === true);

    const accumulatedHeight: number = completedRoutes.reduce((accumulator: number, route: Route) => {
        const height = route.routeHeight;

        return height + accumulator;
    }, 0);
    return accumulatedHeight
};
