import type { Route } from "../../../types/dataTypes"


export const filterByIncompleted = (routes: Route[]): Route[] => {

    return routes.filter((route: Route) => route.completed === false)
}