import type { Route } from "../types/dataTypes";

export const calculateMidGrade = (routes: Route[]): number => {

    const completedRoutes = routes.filter((route: Route) => route.completed === true);

    const accumulatedGrade: number = completedRoutes.reduce((accumulator: number, route: Route) => {
        const grade = route.routeGrade;

        return grade + accumulator;
    }, 0);
    return Math.floor(accumulatedGrade / completedRoutes.length)

};
