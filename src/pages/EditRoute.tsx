import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Route, Location, School, Sector, FormObject } from "../types/dataTypes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { updateLocations } from "../redux/thunks/locationsThunks";
import { updateSectors } from "../redux/thunks/sectorsThunks";
import { updateSchools } from "../redux/thunks/schoolsThunks";
import { deleteRoute, updateRoutes } from "../redux/thunks/routesThunks";
import { editRouteService } from "../services/editRouteService";
import { ScaleContextType } from "../types/gradeType";
import { ScaleContext } from "../context/gradeContext";
import { showModal } from "../services/routeServices/showModal";
import { capitalizeFirstLetterOnly } from "../services/capitalizeFirstLetter";

export const EditRoute: React.FunctionComponent = () => {
	const path = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const { scale } = useContext(ScaleContext) as ScaleContextType;
	const { route } = path.state as { route: Route };

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
		locationName: editingLocation ? capitalizeFirstLetterOnly(editingLocation.locationName) : "",
		schoolName: editingSchool ? capitalizeFirstLetterOnly(editingSchool.schoolName) : "",
		sectorName: editingSector ? capitalizeFirstLetterOnly(editingSector.sectorName) : "",
		routeName: route.routeName ? capitalizeFirstLetterOnly(route.routeName) : "",
		routeGrade: route.routeGrade || 0,
		routeHeight: route.routeHeight || 0,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
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
	const handleDelete = async () => {
		await dispatch(deleteRoute(route));
		navigate("/routes");
	};

	return (
		<div className="h-screen mx-auto bg-base-100 p-10">
			<div className="flex justify-between">
				<button
					className="rounded-2xl text-2xl btn btn-outline h-12 w-12 p-0"
					onClick={() => navigate(-1)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20"
						width="20"
						viewBox="0 0 320 512"
						fill="currentColor">
						<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
					</svg>
				</button>
				<button
					className="rounded-2xl text-2xl btn btn-outline h-12 w-12 p-0"
					onClick={() => showModal("my_modal_4")}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20"
						width="20"
						viewBox="0 0 448 512"
						fill="currentColor">
						<path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
					</svg>
				</button>
			</div>

			<dialog id="my_modal_4" className="modal">
				<div className="modal-box w-2/3">
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
						<h3 className="font-bold text-lg text-center">Seguro que quieres eliminar esta vía?</h3>
						<div className="flex justify-center gap-5 mt-5">
							<button onClick={handleDelete} className="btn btn-accent btn-circle">
								Sí
							</button>
							<button
								onClick={() => navigate(`/routes/route/${route.routeId}`)}
								className="btn btn-secondary btn-circle">
								No
							</button>
						</div>
					</form>
				</div>
			</dialog>

			<h1 className="font-bold text-5xl uppercase my-5">Editar vía</h1>

			<form onSubmit={handleSubmit} className="h-10/12 overflow-y-auto">
				<div>
					<label className="label font-bold uppercase">Ubicación</label>
					<input
						name="locationName"
						type="text"
						value={form.locationName}
						onChange={handleChange}
						required
						className="input input-sm input-bordered rounded-full bg-base-content text-base-100 w-full"
					/>
				</div>
				<div>
					<label className="label font-bold uppercase">Escuela</label>
					<input
						name="schoolName"
						type="text"
						value={form.schoolName}
						onChange={handleChange}
						required
						className="input input-sm input-bordered rounded-full bg-base-content text-base-100 w-full"
					/>
				</div>
				<div>
					<label className="label font-bold uppercase">Sector</label>
					<input
						name="sectorName"
						type="text"
						value={form.sectorName}
						onChange={handleChange}
						required
						className="input input-sm input-bordered rounded-full bg-base-content text-base-100 w-full"
					/>
				</div>
				<div>
					<label className="label font-bold uppercase">Nombre de la Vía</label>
					<input
						name="routeName"
						type="text"
						value={form.routeName}
						onChange={handleChange}
						required
						className="input input-sm input-bordered rounded-full bg-base-content text-base-100 w-full"
					/>
				</div>
				<div>
					<label className="label font-bold uppercase">Grado</label>
					<select
						name="routeGrade"
						className="select-bordered w-full py-1 px-2 bg-base-content text-base-100 rounded-full"
						onChange={handleChange}>
						{scale.grades.map((grade, index) => {
							return (
								<option value={index} key={grade}>
									{grade}
								</option>
							);
						})}
					</select>
				</div>
				<div>
					<label className="label font-bold uppercase">Altura</label>
					<input
						name="routeHeight"
						type="number"
						value={form.routeHeight}
						onChange={handleChange}
						required
						className="input input-sm input-bordered rounded-full bg-base-content text-base-100 w-full"
					/>
				</div>
				<button
					type="submit"
					onClick={handleSubmit}
					className="btn btn-primary rounded-full w-full mt-10 uppercase text-base-content">
					Aceptar Cambios
				</button>
			</form>
		</div>
	);
};
