import type { Route } from "../../types/dataTypes";

export const filterByCompleted = (routes: Route[]): Route[] => {

    const completedRoutes = routes.filter((route: Route) => route.completed === true);
    return completedRoutes;
}