import type { Route } from "../../../types/dataTypes";

export const orderBySchool = (routes: Route[]): Route[] => {
    // Ordenar las rutas por routeSchoolIndex de mayor a menor
    return routes.slice().sort((a, b) => {
        const schoolA = a.schoolIndex;
        const schoolB = b.schoolIndex;

        if (schoolA > schoolB) {
            return -1;
        }
        if (schoolA < schoolB) {
            return 1;
        }
        return 0;
    });
};
