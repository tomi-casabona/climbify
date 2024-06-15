import type { Route } from "../../types/dataTypes";

export const filterByRouteName = (routes: Route[], routeName: string): Route[] => {

    const query = routeName.toLowerCase().trim();

    return routes.filter((route: Route) =>
        route.routeName.toLowerCase().includes(query)
    );
    // para el resultado usar : 
    // { respuesta.map((route, index) => (
    //     <p key={index}>{route.routeName}</p>
};