import type { Route } from "../../types/dataTypes";

export const orderByNameAsc = (routes: Route[]): Route[] => {
    // Ordenar las rutas por el atributo 'name' en orden alfabético ascendente
    return routes.slice().sort((a, b) => {
        const nameA = a.routeName
        const nameB = b.routeName

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
};