import React, { useContext, useState } from "react";
import { FormObject } from "../types/dataTypes";
import { createUserData } from "../services/createUserData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { updateLocations } from "../redux/thunks/locationsThunks";
import { updateSectors } from "../redux/thunks/sectorsThunks";
import { updateSchools } from "../redux/thunks/schoolsThunks";
import { updateRoutes } from "../redux/thunks/routesThunks";
import { useNavigate } from "react-router-dom";
import { ScaleContext } from "../context/gradeContext";
import { ScaleContextType } from "../types/gradeType";

export const Formulario: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const actualState = {
		locations: useSelector((state: RootState) => state.locations),
		schools: useSelector((state: RootState) => state.schools),
		sectors: useSelector((state: RootState) => state.sectors),
		routes: useSelector((state: RootState) => state.routes),
	};
	const navigate = useNavigate();
	const { scale } = useContext(ScaleContext) as ScaleContextType;

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
		const { newLocations, newSchools, newSectors, newRoutes } = createUserData(actualState, form);
		dispatch(updateLocations(newLocations));
		dispatch(updateSchools(newSchools));
		dispatch(updateSectors(newSectors));
		dispatch(updateRoutes(newRoutes));
		navigate("/routes"); // una vez hecho el componente RouteDetail, cambiar el navigate
	};

	return (
		<div className="h-screen mx-auto bg-base-100 p-10">
			<button
				className="rounded-2xl text-2xl btn btn-outline h-12 w-12 p-0"
				onClick={() => navigate("/")}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="20"
					width="20"
					viewBox="0 0 320 512"
					fill="currentColor">
					<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
				</svg>
			</button>
			<h1 className="font-bold text-5xl uppercase my-5">Nueva vía</h1>
			<form onSubmit={handleSubmit} className="h-10/12 overflow-y-auto">
				<div>
					<label className="label">Ubicación:</label>
					<input
						name="locationName"
						placeholder="Barcelona"
						type="text"
						value={form.locationName}
						onChange={handleChange}
						required
						className="input input-sm input-bordered rounded-full bg-base-content text-base-100 w-full"
					/>
				</div>
				<div>
					<label className="label">Escuela:</label>
					<input
						name="schoolName"
						placeholder="La Mola"
						type="text"
						value={form.schoolName}
						onChange={handleChange}
						required
						className="input input-sm input-bordered rounded-full bg-base-content text-base-100 w-full"
					/>
				</div>
				<div>
					<label className="label">Sector:</label>
					<input
						name="sectorName"
						placeholder="La Paret Gran"
						type="text"
						value={form.sectorName}
						onChange={handleChange}
						required
						className="input input-sm input-bordered rounded-full bg-base-content text-base-100 w-full"
					/>
				</div>
				<div>
					<label className="label">Nombre de la Vía:</label>
					<input
						name="routeName"
						placeholder="Rescat Emocional"
						type="text"
						value={form.routeName}
						onChange={handleChange}
						required
						className="input input-sm input-bordered rounded-full bg-base-content text-base-100 w-full"
					/>
				</div>
				<div>
					<label className="label">Grado:</label>
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
				<div className="pb-3">
					<label className="label">Altura máxima:</label>
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
					className="btn btn-primary rounded-full w-full mt-10">
					Agregar Vía
				</button>
			</form>
		</div>
	);
};
