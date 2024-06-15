import type { Route } from "../../types/dataTypes";

export const orderByMinGrade = (routes: Route[]): Route[] => {
    // Ordenar las rutas por routeGrade de menor a mayor
    return routes.slice().sort((a, b) => {
        const gradeA = a.routeGrade;
        const gradeB = b.routeGrade;

        if (gradeA < gradeB) {
            return -1;
        }
        if (gradeA > gradeB) {
            return 1;
        }
        return 0;
    });
};
