// This function should return an object with the information of the userData updated to pass as a parameter of the function updateUserData
import { NewStateObject, UserData } from "../types/userDataTypes";
import { initUserData } from "./initUserData";

export const createUserData = (userData: UserData, newStateObject: NewStateObject) => {
  // Clone or initialize the userData
  let newState: UserData = userData ? { ...userData } : initUserData();

  // Clone the locations array to ensure it's extensible
  newState.locations = [...newState.locations];

  // Find or create the location
  let locationIndex = newState.locations.findIndex(
    (loc) => loc.location === newStateObject.locationName
  );
  if (locationIndex === -1) {
    const location = {
      id: crypto.randomUUID(),
      location: newStateObject.locationName,
      schools: [],
    };
    newState.locations.push(location);
  }

  // Ensure schools array is extensible
  newState.locations[locationIndex].schools = [...newState.locations[locationIndex].schools];
  // Find or create the school
  let schoolIndex = newState.locations[locationIndex].schools.findIndex(
    (sch) => sch.school === newStateObject.schoolName
  );
  if (schoolIndex === -1) {
    const school = {
      id: crypto.randomUUID(),
      school: newStateObject.schoolName,
      sectors: [],
    };
    newState.locations[locationIndex].schools.push(school);
  }

  // Ensure sectors array is extensible
  newState.locations[locationIndex].schools[schoolIndex].sectors = [...newState.locations[locationIndex].schools[schoolIndex].sectors]
  // Find or create the sector
  let sectorIndex = newState.locations[locationIndex].schools[
    schoolIndex
  ].sectors.findIndex((sec) => sec.sector === newStateObject.sectorName);
  if (sectorIndex === -1) {
    const sector = {
      id: crypto.randomUUID(),
      sector: newStateObject.sectorName,
      routes: [],
    };
    newState.locations[locationIndex].schools[schoolIndex].sectors.push(
      sector
    );
  }

  // Ensure routes array is extensible
  newState.locations[locationIndex].schools[schoolIndex].sectors[sectorIndex].routes = [...newState.locations[locationIndex].schools[schoolIndex].sectors[sectorIndex].routes]
  // Find or create the route
  let routeIndex = newState.locations[locationIndex].schools[
    schoolIndex
  ].sectors[sectorIndex].routes.findIndex((r) => r.route === newStateObject.routeName);
  if (routeIndex === -1) {
    const route = {
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

  console.log(newState.locations);

  return newState;
};