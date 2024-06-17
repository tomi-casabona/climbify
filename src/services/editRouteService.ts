import { FormObject, Location, LocationState, Route, RouteState, School, SchoolState, Sector, SectorState } from "../types/dataTypes";

export const editRouteService = (
    actualState: {
        locations: LocationState,
        schools: SchoolState,
        sectors: SectorState,
        routes: RouteState,
    },
    formObject: FormObject,
    existingRouteId: string // This is required now
) => {
    // Clone or initialize the userData
    const newLocations: Location[] = actualState.locations.data
        ? actualState.locations.data.map(location => ({ ...location }))
        : [];

    // Find or create the location
    let locationIndex = newLocations.findIndex(
        (loc) => loc.locationName === formObject.locationName
    );
    if (locationIndex === -1) {
        const location = {
            locationId: crypto.randomUUID(),
            locationName: formObject.locationName,
            schools: []
        };
        newLocations.push(location);
        locationIndex = newLocations.length - 1; // Update the index after push
    }

    const newSchools: School[] = actualState.schools.data
        ? actualState.schools.data.map(school => ({ ...school }))
        : [];

    // Find or create the school
    let schoolIndex = newSchools.findIndex(
        (school) => school.schoolName === formObject.schoolName
    );
    if (schoolIndex === -1) {
        const school = {
            schoolId: crypto.randomUUID(),
            schoolName: formObject.schoolName,
            locationIndex: locationIndex,
            sectors: []
        };
        newSchools.push(school);
        schoolIndex = newSchools.length - 1; // Update the index after push
    }

    const newSectors: Sector[] = actualState.sectors.data
        ? actualState.sectors.data.map(sector => ({ ...sector }))
        : [];

    // Find or create the sector
    let sectorIndex = newSectors.findIndex(
        (sector) => sector.sectorName === formObject.sectorName
    );
    if (sectorIndex === -1) {
        const sector = {
            sectorId: crypto.randomUUID(),
            sectorName: formObject.sectorName,
            locationIndex: locationIndex,
            schoolIndex: schoolIndex,
            routes: []
        };
        newSectors.push(sector);
        sectorIndex = newSectors.length - 1; // Update the index after push
    }

    const newRoutes: Route[] = actualState.routes.data
        ? actualState.routes.data.map(route => ({ ...route }))
        : [];

    // Find the route by ID and update it
    const routeIndex = newRoutes.findIndex(route => route.routeId === existingRouteId);
    if (routeIndex !== -1) {
        newRoutes[routeIndex] = {
            ...newRoutes[routeIndex],
            routeName: formObject.routeName,
            routeGrade: formObject.routeGrade,
            routeHeight: formObject.routeHeight,
            locationIndex: locationIndex,
            schoolIndex: schoolIndex,
            sectorIndex: sectorIndex
        };
    }

    // Ensure the relationships are correct
    newLocations[locationIndex].schools = [...new Set([...newLocations[locationIndex].schools, schoolIndex])];
    newSchools[schoolIndex].sectors = [...new Set([...newSchools[schoolIndex].sectors, sectorIndex])];
    newSectors[sectorIndex].routes = [...new Set([...newSectors[sectorIndex].routes, routeIndex])];

    return { newLocations, newSchools, newSectors, newRoutes };
};
