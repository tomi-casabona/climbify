import React, { useState } from "react";
import { Route, UserData } from "../redux/types/userDataTypes";

export const Formulario: React.FC = () => {
  const [location, setLocation] = useState("");
  const [school, setSchool] = useState("");
  const [sector, setSector] = useState("");
  const [comments, setComments] = useState("");
  const [route, setRoute] = useState("");
  const [grade, setGrade] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [attemptId, setAttemptId] = useState<string>("");

  // todo : hacer un formulario de modificacion del intento

  const [data, setData] = useState<UserData>({ ascents: 0, locations: null }); // inicializar con el getFirebaseData

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newVia: Route = {
      route,
      grade,
      score,
      attempts: [
        {
          date: new Date(),
          comments,
          completed,
        },
      ],
    };

    setData((prevData) => {
      const updatedData = { ...prevData };

      if (updatedData.locations) {
        const locationIndex = updatedData.locations.findIndex(
          (c) => c.location === location
        );

        if (
          locationIndex !== -1 &&
          updatedData.locations[locationIndex].schools
        ) {
          const schoolIndex = updatedData.locations[
            locationIndex
          ].schools.findIndex((e) => e.school === school);

          if (
            schoolIndex !== -1 &&
            updatedData.locations[locationIndex].schools[schoolIndex].sectors
          ) {
            const sectorIndex = updatedData.locations[locationIndex].schools[
              schoolIndex
            ].sectors.findIndex((s) => s.sector === sector);

            if (
              sectorIndex !== -1 &&
              updatedData.locations[locationIndex].schools[schoolIndex].sectors[
                sectorIndex
              ].routes
            ) {
              const routeIndex = updatedData.locations[locationIndex].schools[
                schoolIndex
              ].sectors[sectorIndex].routes.findIndex((r) => r.route === route);

              if (
                routeIndex !== -1 &&
                updatedData.locations[locationIndex].schools[schoolIndex]
                  .sectors[sectorIndex].routes[routeIndex].attempts
              ) {
                const attemptIndex = updatedData.locations[
                  locationIndex
                ].schools[schoolIndex].sectors[sectorIndex].routes[
                  routeIndex
                ].attempts.findIndex((a) => a.id === attemptId);

                if (
                  attemptIndex !== -1 &&
                  updatedData.locations[locationIndex].schools[schoolIndex]
                    .sectors[sectorIndex].routes[routeIndex].attempts[
                    attemptIndex
                  ]
                ) {
                  //////////////////////
                }
              }
            } else {
              updatedData.locations[locationIndex].schools[
                schoolIndex
              ].sectors.push({
                sector,
                routes: [newVia],
              });
            }
          } else {
            updatedData[locationIndex].schools.push({
              school,
              sectores: [{ sector, vias: [newVia] }],
            });
          }
        } else {
          updatedData.push({
            location,
            schools: [{ school, sectores: [{ sector, vias: [newVia] }] }],
          });
        }
      }

      return updatedData;
    });

    setRoute("");
    setGrade(0);
    setScore(0);
    setComments("");
    setCompleted(false);
    setLocation("");
    setSchool("");
    setSector("");
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
      <pre className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};
