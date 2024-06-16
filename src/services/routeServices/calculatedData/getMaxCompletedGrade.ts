import type { Route } from "../types/dataTypes";

export const getMaxCompletedGrade = (routes: Route[]): number => {

    const completedRoutes = routes.filter((route: Route) => route.completed === true);

    const maxGrade: number = completedRoutes.reduce((max: number, route: Route) => {
        const grade = route.routeGrade;

        return grade > max ? grade : max;
    }, 0);
    return maxGrade;
};