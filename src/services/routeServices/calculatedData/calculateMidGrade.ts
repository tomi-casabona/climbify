import { Route } from "../../../types/dataTypes";

export const calculateMidGrade = (routes: Route[]): number => {

    const completedRoutes = routes.filter((route: Route) => route.completed === true);
    const suma = completedRoutes.reduce((acumulador, route) => acumulador + route.routeGrade, 0);
    const media = suma / completedRoutes.length;

    return media;
};
