import type { Route } from "../../../types/dataTypes";

export const calculateCompletedRoutes = (routes: Route[]): number => {

    const completedRoutes = routes.filter((route: Route) => route.completed === true)
    const total: number = completedRoutes.length
    return total;
}