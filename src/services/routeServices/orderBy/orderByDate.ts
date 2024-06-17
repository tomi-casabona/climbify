import type { Attempt, Route } from "../../../types/dataTypes";
import { getMostRecentDate } from "../getMostRecentDate";

export const orderByDate = (routes: Route[]): Route[] => {
    // Función para obtener la fecha más reciente de los intentos de una ruta
    // sort sin compareFunction , si devuelve algo menor que 0, a va primero que b, y viceversa

    // Ordenar las rutas por la fecha más reciente de sus intentos
    return routes.slice().sort((routeA, routeB) => {
        const dateA = getMostRecentDate(routeA.routeAttempts);
        const dateB = getMostRecentDate(routeB.routeAttempts);

        // Ordenar de forma descendente (más reciente primero)
        return dateB.getTime() - dateA.getTime();
    });
};
