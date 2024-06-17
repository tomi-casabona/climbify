import type { Attempt, Route } from "../../../types/dataTypes";

export const orderByDate = (routes: Route[]): Route[] => {
    // Función para obtener la fecha más reciente de los intentos de una ruta
    // sort sin compareFunction , si devuelve algo menor que 0, a va primero que b, y viceversa
    const getMostRecentDate = (attempts: Attempt[]) => {
        const sortedAttempts = attempts.slice().sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        return new Date(sortedAttempts[0].date)
    }

    // Ordenar las rutas por la fecha más reciente de sus intentos
    return routes.slice().sort((routeA, routeB) => {
        const dateA = getMostRecentDate(routeA.routeAttempts);
        const dateB = getMostRecentDate(routeB.routeAttempts);

        // Ordenar de forma descendente (más reciente primero)
        return dateB.getTime() - dateA.getTime();
    });
};
