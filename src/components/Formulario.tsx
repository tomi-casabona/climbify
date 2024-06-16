import React, { useState } from "react";
import { FormObject } from "../types/dataTypes";
import { createUserData } from "../services/createUserData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { updateLocations } from "../redux/thunks/locationsThunks";
import { updateSectors } from "../redux/thunks/sectorsThunks";
import { updateSchools } from "../redux/thunks/schoolsThunks";
import { updateRoutes } from "../redux/thunks/routesThunks";

export const Formulario: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const actualState = {
    locations: useSelector((state: RootState) => state.locations),
    schools: useSelector((state: RootState) => state.schools),
    sectors: useSelector((state: RootState) => state.sectors),
    routes: useSelector((state: RootState) => state.routes),
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [form, setForm] = useState<FormObject>({
    locationName: "",
    schoolName: "",
    sectorName: "",
    routeName: "",
    routeGrade: 0,
    routeHeight: 0,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { newLocations, newSchools, newSectors, newRoutes } = createUserData(
      actualState,
      form
    );
    dispatch(updateLocations(newLocations));
    dispatch(updateSchools(newSchools));
    dispatch(updateSectors(newSectors));
    dispatch(updateRoutes(newRoutes));
  };

  return (
    <div className="max-w-4xl mx-auto p-6bg-light-bg dark:bg-dark-bg bg-contain bg-no-repeatshadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">
        Formulario de Vías de Escalada
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre de la Ciudad:
          </label>
          <input
            name="locationName"
            type="text"
            value={form.locationName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre de la Escuela:
          </label>
          <input
            name="schoolName"
            type="text"
            value={form.schoolName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre del Sector:
          </label>
          <input
            name="sectorName"
            type="text"
            value={form.sectorName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre de la Vía:
          </label>
          <input
            name="routeName"
            type="text"
            value={form.routeName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Grado:
          </label>
          <input
            name="routeGrade"
            type="number"
            value={form.routeGrade}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Altura máxima:
          </label>
          <input
            name="routeHeight"
            type="number"
            value={form.routeHeight}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Agregar Vía
        </button>
      </form>
    </div>
  );
};
