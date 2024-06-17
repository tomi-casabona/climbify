import type { Attempt, Route } from "../types/dataTypes";

export const updatePegue = (routeParam: Route, routes: Route[], attempt: Attempt) => {

    const updatedRoute: Route = {
        ...routeParam,
        routeAttempts: [...routeParam.routeAttempts, attempt],
    };

    console.log(updatedRoute);
    // Find the route by ID and update it
    const routeIndex = routes.findIndex((route) => route.routeId === routeParam.routeId);
    const newRoutes = [...routes];
    if (routeIndex !== -1) {
        newRoutes[routeIndex] = {
            ...newRoutes[routeIndex],
            routeAttempts: [...routeParam.routeAttempts, attempt],
        };
    }

return newRoutes};
