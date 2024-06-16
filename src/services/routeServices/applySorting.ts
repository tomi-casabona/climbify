import type { Route } from "../../types/dataTypes";
import { orderByDate } from "./orderBy/orderByDate";
import { orderByLocation } from "./orderBy/orderByLocation";
import { orderByMaxGrade } from "./orderBy/orderByMaxGrade";
import { orderByMinGrade } from "./orderBy/orderByMinGrade";
import { orderByNameAsc } from "./orderBy/orderByName";
import { orderBySchool } from "./orderBy/orderBySchool";
import { orderBySector } from "./orderBy/orderBySector";

export const applySorting = (selectedOrder: string, filteredRoutes: Route[]): Route[] => {
    if (selectedOrder) {
        switch (selectedOrder) {
            case "recentDate":
                return orderByDate(filteredRoutes);
            case "name":
                return orderByNameAsc(filteredRoutes);
            case "levelDescendent":
                return orderByMaxGrade(filteredRoutes);
            case "levelAscendent":
                return orderByMinGrade(filteredRoutes);
            case "sectorName":
                return orderBySector(filteredRoutes);
            case "locationName":
                return orderByLocation(filteredRoutes);
            case "schoolName":
                return orderBySchool(filteredRoutes);
            default:
                return filteredRoutes;
        }
    }
    // Default return if selectedOrder is not provided or falsy
    return filteredRoutes;
};
