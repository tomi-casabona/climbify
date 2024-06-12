import React, { useState } from "react";
import { UserData } from "../redux/types/userDataTypes";

export const Formulario: React.FC = () => {
  const [location, setLocation] = useState("");
  const [school, setSchool] = useState("");
  const [sector, setSector] = useState("");
  const [comments, setComments] = useState("");
  const [route, setRoute] = useState("");
  const [grade, setGrade] = useState<number>(0);  
  const [height, setHeight] = useState<number>(0);

  const [userData, setUserData] = useState<UserData>({
    id: crypto.randomUUID(),
    ascents: 0,
    locations: [],
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const locationName = location;
    const schoolName = school;
    const sectorName = sector;
    const routeName = route;
    const routeGrade = grade;
    const routeHeight = height;

    setUserData((prevState) => {
      // Previous state was cloned
      const newState = { ...prevState };

      // Find or create the location
      let location = newState.locations.find(
        (loc) => loc.location === locationName
      );
      if (!location) {
        location = {
          id: crypto.randomUUID(),
          location: locationName,
          schools: [],
        };
        newState.locations.push(location);
      }

      //Get location Index
      const locationIndex = newState.locations.findIndex(
        (l) => l.location === locationName
      );

      // Find or create the school
      let school = newState.locations[locationIndex].schools.find(
        (sch) => sch.school === schoolName
      );
      if (!school) {
        school = {
          id: crypto.randomUUID(),
          school: schoolName,
          sectors: [],
        };
        newState.locations[locationIndex].schools.push(school);
      }
      //Get school Index

      const schoolIndex = newState.locations[locationIndex].schools.findIndex(
        (s) => s.school === schoolName
      );

      // Find or create the sector
      let sector = newState.locations[locationIndex].schools[
        schoolIndex
      ].sectors.find((sec) => sec.sector === sectorName);
      if (!sector) {
        sector = {
          id: crypto.randomUUID(),
          sector: sectorName,
          routes: [],
        };
        newState.locations[locationIndex].schools[schoolIndex].sectors.push(
          sector
        );
      }
      //Get sector Index

      const sectorIndex = newState.locations[locationIndex].schools[
        schoolIndex
      ].sectors.findIndex((s) => s.sector === sectorName);

      // Find or create the route
      let route = newState.locations[locationIndex].schools[
        schoolIndex
      ].sectors[sectorIndex].routes.find((r) => r.route === routeName);
      if (!route) {
        route = {
          id: crypto.randomUUID(),
          route: routeName,
          grade: routeGrade,
          height: routeHeight,
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
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">
        Formulario de Vías de Escalada
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre de la Ciudad:
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre de la Escuela:
          </label>
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre del Sector:
          </label>
          <input
            type="text"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre de la Vía:
          </label>
          <input
            type="text"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Grado:
          </label>
          <input
            type="number"
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value))}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Altura máxima:
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Comentarios:
          </label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Agregar Vía
        </button>
      </form>
    </div>
  );
};
