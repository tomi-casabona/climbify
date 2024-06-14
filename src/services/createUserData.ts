import { FormObject, Location, LocationState, Route, RouteState, School, SchoolState, Sector, SectorState } from "../types/dataTypes";

export const createUserData = (actualState: { locations: LocationState, schools: SchoolState, sectors: SectorState, routes: RouteState, }, formObject: FormObject) => {
  // Clone or initialize the userData
  const newLocations: Location[] = actualState.locations.data ? actualState.locations.data.map(location => ({ ...location })) : [{ locationId: crypto.randomUUID(), locationName: formObject.locationName, schools: [] }];

  // Find or create the location
  let locationIndex = newLocations.findIndex(
    (loc) => loc.locationName === formObject.locationName
  );
  if (locationIndex === -1) {
    const location = { locationId: crypto.randomUUID(), locationName: formObject.locationName, schools: [] };
    newLocations.push(location);
    locationIndex = newLocations.length - 1; // Update the index after push
  }

  const newSchools: School[] = actualState.schools.data ? actualState.schools.data.map(school => ({ ...school })) : [{ schoolId: crypto.randomUUID(), schoolName: formObject.schoolName, locationIndex: locationIndex, sectors: [] }]

  // Find or create the school
  let schoolIndex = newSchools.findIndex(
    (school) => school.schoolName === formObject.schoolName
  );
  if (schoolIndex === -1) {
    const school = { schoolId: crypto.randomUUID(), schoolName: formObject.locationName, locationIndex: locationIndex, sectors: [] };
    newSchools.push(school);
    schoolIndex = newSchools.length - 1; // Update the index after push
  }

  const newSectors: Sector[] = actualState.sectors.data ? actualState.sectors.data.map(sector => ({ ...sector })) : [{ sectorId: crypto.randomUUID(), sectorName: formObject.sectorName, locationIndex: locationIndex, schoolIndex: schoolIndex, routes: [] }]

  // Find or create the school
  let sectorIndex = newSectors.findIndex(
    (sector) => sector.sectorName === formObject.sectorName
  );
  if (sectorIndex === -1) {
    const sector = { sectorId: crypto.randomUUID(), sectorName: formObject.locationName, locationIndex: locationIndex, schoolIndex: schoolIndex, routes: [] };
    newSectors.push(sector);
    sectorIndex = newSectors.length - 1; // Update the index after push
  }

  const newRoutes: Route[] = actualState.routes.data ? actualState.routes.data.map(route => ({ ...route })) : [{ routeId: crypto.randomUUID(), routeName: formObject.routeName, locationIndex: locationIndex, schoolIndex: schoolIndex, sectorIndex: sectorIndex, routeAttempts: [], routeComments: [], routeGrade: formObject.routeGrade, routeHeight: formObject.routeHeight, completed: false }]

  // Find or create the school
  let routeIndex = newRoutes.findIndex(
    (route) => route.routeName === formObject.routeName
  );
  if (routeIndex === -1) {
    const route = { routeId: crypto.randomUUID(), routeName: formObject.routeName, locationIndex: locationIndex, schoolIndex: schoolIndex, sectorIndex: sectorIndex, routeAttempts: [], routeComments: [], routeGrade: formObject.routeGrade, routeHeight: formObject.routeHeight, completed: false };
    newRoutes.push(route);
    routeIndex = newRoutes.length - 1; // Update the index after push
  }


  return { newLocations, newSchools, newSectors, newRoutes };
};
