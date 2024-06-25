import type { Route } from "../../../types/dataTypes";


export const orderBySector = (routes: Route[]): Route[] => {
    // Función para obtener las rutas agrupadas por sector
    // sort sin compareFunction , si devuelve algo menor que 0, a va primero que b, y viceversa  

    return routes.slice().sort((routeA, routeB) => {
        const sectorA = routeA.sectorIndex;
        const sectorB = routeB.sectorIndex;

        return sectorB - sectorA;
    });
};
