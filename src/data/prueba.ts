import type { Location, Route, School, Sector } from "../types/dataTypes";

 const locationPrueba: Location = {
    locationId: crypto.randomUUID(),
    locationName: "Barcelona",
    schools: [2, 3, 1],
}

 const schoolPrueba: School = {
    schoolId: crypto.randomUUID(),
    schoolName: "La Mola",
    locationIndex: 2,
    sectors: [2, 1],
}

 const sectorPrueba : Sector = {
    sectorId: crypto.randomUUID(),
    sectorName: "Diafragma",
    schoolIndex: 2,
    locationIndex: 1,
    routes: [4],
}

 const routePrueba: Route = {
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
 const routePrueba2: Route = {
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
export const routesPrueba = [routePrueba, routePrueba2]
export const locationsPrueba = [locationPrueba]
export const secotrsPrueba = [sectorPrueba]
export const schoolsPrueba = [schoolPrueba]