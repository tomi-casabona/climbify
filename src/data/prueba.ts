import type { Location, Route, School, SchoolState } from "../types/dataTypes";

export const locationPrueba: Location = {
    locationId: crypto.randomUUID(),
    locationName: "Barcelona",
    schools: [2, 3, 1],
}

export const schoolPrueba: School = {
    schoolId: crypto.randomUUID(),
    schoolName: "La Mola",
    locationIndex: 2,
    sectors: [2, 1],
}

export const sectorPrueba: Sector = {
    sectorId: crypto.randomUUID(),
    sectorName: "Diafragma",
    schoolIndex: [2],
    locationIndex: [1],
    locationPrueba,
    routes: [4],
}

export const routePrueba: Route = {
    routeId: crypto.randomUUID(),
    routeName: "Comienza a registrar",
    routeGrade: 2,
    routeScore: 2,
    routeComments: ["Comentario random"],
    routeHeight: 21,
    routeAttempts: [{ id: crypto.randomUUID(), date: new Date().toDateString(), completed: true }],
    completed: true,
    sectorIndex: 2,
    schoolIndex: 2,
    locationIndex: 2,
}
export const routePrueba2: Route = {
    routeId: crypto.randomUUID(),
    routeName: "Tu progreso",
    routeGrade: 2,
    routeScore: 2,
    routeComments: ["Comentario random"],
    routeHeight: 21,
    routeAttempts: [{ id: crypto.randomUUID(), date: new Date().toDateString(), completed: true }],
    completed: true,
    sectorIndex: 2,
    schoolIndex: 2,
    locationIndex: 2,
}