// This function should return an object with the information of the userData updated to pass as a parameter of the function updateUserData

import { NewStateObject, UserData } from "../types/userDataTypes";

export const createUserData = (userData: UserData, newStateObject: NewStateObject) => {
  // Previous state was cloned
  const newState = { ...userData };

  // Find or create the location
  let location = newState.locations.find(
    (loc) => loc.location === newStateObject.locationName
  );
  if (!location) {
    location = {
      id: crypto.randomUUID(),
      location: newStateObject.locationName,
      schools: [],
    };
    newState.locations.push(location);
  }
  //Get location Index
  const locationIndex = newState.locations.findIndex(
    (l) => l.location === newStateObject.locationName
  );

  // Find or create the school
  let school = newState.locations[locationIndex].schools.find(
    (sch) => sch.school === newStateObject.schoolName
  );
  if (!school) {
    school = {
      id: crypto.randomUUID(),
      school: newStateObject.schoolName,
      sectors: [],
    };
    newState.locations[locationIndex].schools.push(school);
  }
  //Get school Index
  const schoolIndex = newState.locations[locationIndex].schools.findIndex(
    (s) => s.school === newStateObject.schoolName
  );

  // Find or create the sector
  let sector = newState.locations[locationIndex].schools[
    schoolIndex
  ].sectors.find((sec) => sec.sector === newStateObject.sectorName);
  if (!sector) {
    sector = {
      id: crypto.randomUUID(),
      sector: newStateObject.sectorName,
      routes: [],
    };
    newState.locations[locationIndex].schools[schoolIndex].sectors.push(
      sector
    );
  }
  //Get sector Index
  const sectorIndex = newState.locations[locationIndex].schools[
    schoolIndex
  ].sectors.findIndex((s) => s.sector === newStateObject.sectorName);

  // Find or create the route
  let route = newState.locations[locationIndex].schools[
    schoolIndex
  ].sectors[sectorIndex].routes.find((r) => r.route === newStateObject.routeName);
  if (!route) {
    route = {
      id: crypto.randomUUID(),
      route: newStateObject.routeName,
      grade: newStateObject.routeGrade,
      height: newStateObject.routeHeight,
      attempts: [],
      completed: false,
    };
    newState.locations[locationIndex].schools[schoolIndex].sectors[
      sectorIndex
    ].routes.push(route);
  }
  //Get route Index

  // const routeIndex = newState.locations[locationIndex].schools[
  //   schoolIndex
  // ].sectors[sectorIndex].routes.findIndex((r) => r.route === routeName);

  console.log(newState.locations);

  return newState;
};