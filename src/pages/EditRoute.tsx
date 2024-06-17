import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Route, Location, School, Sector, FormObject } from "../types/dataTypes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { updateLocations } from "../redux/thunks/locationsThunks";
import { updateSectors } from "../redux/thunks/sectorsThunks";
import { updateSchools } from "../redux/thunks/schoolsThunks";
import { deleteRoute, updateRoutes } from "../redux/thunks/routesThunks";
import { editRouteService } from "../services/editRouteService";

export const EditRoute: React.FunctionComponent = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const { route } = location.state as { route: Route };

	const locations = useSelector((state: RootState) => state.locations);
	const schools = useSelector((state: RootState) => state.schools);
	const sectors = useSelector((state: RootState) => state.sectors);
	const routes = useSelector((state: RootState) => state.routes);

	const actualState = {
		locations,
		schools,
		sectors,
		routes,
	};

	const editingSector = sectors.data?.find(
		(sector: Sector) => sectors.data && sector.sectorId === sectors.data[route.sectorIndex].sectorId
	);

	const editingSchool = schools.data?.find(
		(school: School) => schools.data && school.schoolId === schools.data[route.schoolIndex].schoolId
	);

	const editingLocation = locations.data?.find(
		(location: Location) =>
			locations.data && location.locationId === locations.data[route.locationIndex].locationId
	);

	const [form, setForm] = useState<FormObject>({
		locationName: editingLocation?.locationName || "",
		schoolName: editingSchool?.schoolName ? editingSchool.schoolName.toUpperCase().trim() : "",
		sectorName: editingSector?.sectorName ? editingSector.sectorName.toUpperCase().trim() : "",
		routeName: route.routeName ? route.routeName.toUpperCase().trim() : "",
		routeGrade: route.routeGrade || 0,
		routeHeight: route.routeHeight || 0,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const { newLocations, newSchools, newSectors, newRoutes } = editRouteService(
			actualState,
			form,
			route.routeId
		);

		dispatch(updateLocations(newLocations));
		dispatch(updateSchools(newSchools));
		dispatch(updateSectors(newSectors));
		dispatch(updateRoutes(newRoutes));
		navigate("/routes");
	};
	const handleDelete = () => {
		dispatch(deleteRoute(route));
	};

	return (
		<div className="max-w-4xl mx-auto p-6 bg-light-bg dark:bg-dark-bg bg-contain bg-no-repeat shadow-md rounded-lg">
			<h1 className="text-2xl font-bold mb-6">Formulario de Vías de Escalada</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block text-sm font-medium text-gray-700">Nombre de la Ciudad:</label>
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
					<label className="block text-sm font-medium text-gray-700">Nombre de la Escuela:</label>
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
					<label className="block text-sm font-medium text-gray-700">Nombre del Sector:</label>
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
					<label className="block text-sm font-medium text-gray-700">Nombre de la Vía:</label>
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
					<label className="block text-sm font-medium text-gray-700">Grado:</label>
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
					<label className="block text-sm font-medium text-gray-700">Altura máxima:</label>
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
					className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					Agregar Vía
				</button>
				<button
					type="submit"
					onClick={handleDelete}
					className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					Eliminar Via
				</button>
			</form>
		</div>
	);
};
