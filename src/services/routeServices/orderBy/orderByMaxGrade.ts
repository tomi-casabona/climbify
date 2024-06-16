import type { Route } from "../../../types/dataTypes";

export const orderByMaxGrade = (routes: Route[]): Route[] => {
    // Ordenar las rutas por routeGrade de mayor a menor
    return routes.slice().sort((a, b) => {
        const gradeA = a.routeGrade;
        const gradeB = b.routeGrade;

        if (gradeA > gradeB) {
            return -1;
        }
        if (gradeA < gradeB) {
            return 1;
        }
        return 0;
    });
};
