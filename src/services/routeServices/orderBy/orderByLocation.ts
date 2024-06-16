import type { Route } from "../../../types/dataTypes";

export const orderByLocation = (routes: Route[]): Route[] => {
    // Ordenar las rutas por routeGrade de mayor a menor
    return routes.slice().sort((a, b) => {
        const locA = a.locationIndex;
        const locB = b.locationIndex;

        if (locA > locB) {
            return -1;
        }
        if (locA < locB) {
            return 1;
        }
        return 0;
    });
};
