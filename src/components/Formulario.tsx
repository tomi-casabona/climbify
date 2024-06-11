import React, { useState } from "react";

interface Intento {
  date: number;
  comentarios: string;
  completed: boolean;
}

interface Via {
  nombre: string;
  grado: number;
  calificacion: number;
  intentos: Intento[];
}

interface Sector {
  sector: string;
  vias: Via[];
}

interface Escuela {
  escuela: string;
  sectores: Sector[];
}

interface Ciudad {
  ciudad: string;
  escuelas: Escuela[];
}

export const Formulario: React.FC = () => {
  const [ciudad, setCiudad] = useState("");
  const [escuela, setEscuela] = useState("");
  const [sector, setSector] = useState("");
  const [nombre, setNombre] = useState("");
  const [grado, setGrado] = useState<number>(0);
  const [calificacion, setCalificacion] = useState<number>(0);
  const [comentarios, setComentarios] = useState("");
  const [completed, setCompleted] = useState<boolean>(false);

  const [data, setData] = useState<Ciudad[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newVia: Via = {
      nombre,
      grado,
      calificacion,
      intentos: [
        {
          date: Date.now(),
          comentarios,
          completed,
        },
      ],
    };

    setData((prevData) => {
      const updatedData = [...prevData];
      const ciudadIndex = updatedData.findIndex((c) => c.ciudad === ciudad);

      if (ciudadIndex !== -1) {
        const escuelaIndex = updatedData[ciudadIndex].escuelas.findIndex(
          (e) => e.escuela === escuela
        );
        if (escuelaIndex !== -1) {
          const sectorIndex = updatedData[ciudadIndex].escuelas[
            escuelaIndex
          ].sectores.findIndex((s) => s.sector === sector);
          if (sectorIndex !== -1) {
            updatedData[ciudadIndex].escuelas[escuelaIndex].sectores[
              sectorIndex
            ].vias.push(newVia);
          } else {
            updatedData[ciudadIndex].escuelas[escuelaIndex].sectores.push({
              sector,
              vias: [newVia],
            });
          }
        } else {
          updatedData[ciudadIndex].escuelas.push({
            escuela,
            sectores: [{ sector, vias: [newVia] }],
          });
        }
      } else {
        updatedData.push({
          ciudad,
          escuelas: [{ escuela, sectores: [{ sector, vias: [newVia] }] }],
        });
      }

      return updatedData;
    });

    setNombre("");
    setGrado(0);
    setCalificacion(0);
    setComentarios("");
    setCompleted(false);
    setCiudad("");
    setEscuela("");
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
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
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
            value={escuela}
            onChange={(e) => setEscuela(e.target.value)}
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
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
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
            value={grado}
            onChange={(e) => setGrado(Number(e.target.value))}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Calificación:
          </label>
          <input
            type="number"
            value={calificacion}
            onChange={(e) => setCalificacion(Number(e.target.value))}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Comentarios:
          </label>
          <textarea
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex items-center">
          <label className="block text-sm font-medium text-gray-700 mr-4">
            Completado:
          </label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
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
