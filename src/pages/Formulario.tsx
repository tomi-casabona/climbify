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
import { SuggestionsDropdown } from "../components/SuggestionsDropdown";
import {
	getSuggestionsForLocations,
	getSuggestionsForRoutes,
	getSuggestionsForSchools,
	getSuggestionsForSectors,
} from "../services/sugestionServices/getSuggestions";

export const Formulario: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const actualState = {
		locations: useSelector((state: RootState) => state.locations),
		schools: useSelector((state: RootState) => state.schools),
		sectors: useSelector((state: RootState) => state.sectors),
		routes: useSelector((state: RootState) => state.routes),
	};
	const [form, setForm] = useState<FormObject>({
		locationName: "",
		schoolName: "",
		sectorName: "",
		routeName: "",
		routeGrade: 0,
		routeHeight: 0,
	});
	const [suggestions, setSuggestions] = useState<string[]>([]); // Estado para almacenar las sugerencias
	const [showLocationSuggestions, setShowLocationSuggestions] = useState(false); // Estado para controlar la visibilidad del dropdown
	const [showSchoolSuggestions, setShowSchoolSuggestions] = useState(false);
	const [showSectorSuggestions, setShowSectorSuggestions] = useState(false);
	const [showRouteSuggestions, setShowRouteSuggestions] = useState(false);
	const navigate = useNavigate();
	const { scale } = useContext(ScaleContext) as ScaleContextType;

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});

		//  lógica para obtener sugerencias basadas en el nombre del campo
		if (name === "locationName") {
			const suggestions = getSuggestionsForLocations(value, actualState); // Función que obtiene las sugerencias
			setSuggestions(suggestions);
			setShowLocationSuggestions(true);
		}
		if (name === "schoolName") {
			const suggestions = getSuggestionsForSchools(value, actualState);
			setSuggestions(suggestions);
			setShowSchoolSuggestions(true);
		}
		if (name === "sectorName") {
			const suggestions = getSuggestionsForSectors(value, actualState);
			setSuggestions(suggestions);
			setShowSectorSuggestions(true);
		}
		if (name === "routeName") {
			const suggestions = getSuggestionsForRoutes(value, actualState);
			setSuggestions(suggestions);
			setShowRouteSuggestions(true);
		}
	};

	const handleClick = (event: React.MouseEvent<HTMLInputElement>): void => {
		const { name } = event.target as HTMLInputElement;

		console.log(suggestions);

		if (name === "locationName") {
			const suggestions = getSuggestionsForLocations("", actualState);
			setSuggestions(suggestions);
			setShowLocationSuggestions(true);
		}
		if (name === "schoolName") {
			const suggestions = getSuggestionsForSchools("", actualState);
			setSuggestions(suggestions);
			setShowSchoolSuggestions(true);
		}
		if (name === "sectorName") {
			const suggestions = getSuggestionsForSectors("", actualState);
			setSuggestions(suggestions);
			setShowSectorSuggestions(true);
		}
		if (name === "routeName") {
			const suggestions = getSuggestionsForRoutes("", actualState);
			setSuggestions(suggestions);
			setShowRouteSuggestions(true);
		}
	};

	const handleSelectSuggestion = (suggestion: string, fieldName: string) => {
		setForm({
			...form,
			[fieldName]: suggestion,
		});
	};

	
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const { newLocations, newSchools, newSectors, newRoutes } = createUserData(actualState, form);
		dispatch(updateLocations(newLocations));
		dispatch(updateSchools(newSchools));
		dispatch(updateSectors(newSectors));
		dispatch(updateRoutes(newRoutes));
		navigate(`route/${newRoutes[newRoutes.length - 1].routeId}`);
	};

	return (
		<>
			<div className="h-screen mx-auto p-10 animate-fadeIn md:w-10/12">
				<button
					className="rounded-2xl text-2xl btn btn-outline h-12 w-12 p-0 md:ml-24 "
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
				<h1 className="font-bold text-5xl uppercase my-5 md:text-center md:mt-0">Nueva vía</h1>
				<form onSubmit={handleSubmit} className="h-10/12 overflow-y-auto md:flex md:flex-wrap md:justify-evenly">
					<div className="md:w-1/3 md:m-2">
						<label className="label font-bold uppercase">Ubicación</label>
						<input
							name="locationName"
							placeholder="Barcelona"
							type="text"
							value={form.locationName}
							onChange={handleChange}
							onClick={handleClick}
							required
							autoComplete="off"
							className="input input-sm input-bordered rounded-full text-slate-800 bg-secondary  w-full"
						/>

						{showLocationSuggestions && (
							<SuggestionsDropdown
								suggestions={suggestions}
								onSelectSuggestion={(suggestion) =>
									handleSelectSuggestion(suggestion, "locationName")
								}
								closeDropdown={() => setShowLocationSuggestions(false)}
							/>
						)}
					</div>
					<div className="md:w-1/3 md:m-2">
						<label className="label font-bold uppercase">Escuela</label>
						<input
							name="schoolName"
							placeholder="La Mola"
							type="text"
							value={form.schoolName}
							onChange={handleChange}
							onClick={handleClick}
							required
							autoComplete="off"
							className="input input-sm input-bordered rounded-full text-slate-800 bg-secondary  w-full"
						/>{" "}
						{showSchoolSuggestions && (
							<SuggestionsDropdown
								suggestions={suggestions}
								onSelectSuggestion={(suggestion) =>
									handleSelectSuggestion(suggestion, "schoolName")
								}
								closeDropdown={() => setShowSchoolSuggestions(false)}
							/>
						)}
					</div>
					<div className="md:w-1/3 md:m-2">
						<label className="label font-bold uppercase">Sector</label>
						<input
							name="sectorName"
							placeholder="La Paret Gran"
							type="text"
							value={form.sectorName}
							onChange={handleChange}
							onClick={handleClick}
							required
							autoComplete="off"
							className="input input-sm input-bordered rounded-full bg-secondary text-slate-800 w-full"
						/>{" "}
						{showSectorSuggestions && (
							<SuggestionsDropdown
								suggestions={suggestions}
								onSelectSuggestion={(suggestion) =>
									handleSelectSuggestion(suggestion, "sectorName")
								}
								closeDropdown={() => setShowSectorSuggestions(false)}
							/>
						)}
					</div>
					<div className="md:w-1/3 md:m-2">
						<label className="label font-bold uppercase">Nombre de la Vía</label>
						<input
							name="routeName"
							placeholder="Rescat Emocional"
							type="text"
							value={form.routeName}
							onChange={handleChange}
							onClick={handleClick}
							required
							autoComplete="off"
							className="input input-sm input-bordered rounded-full bg-secondary  text-slate-800 w-full"
						/>{" "}
						{showRouteSuggestions && (
							<SuggestionsDropdown
								suggestions={suggestions}
								onSelectSuggestion={(suggestion) => handleSelectSuggestion(suggestion, "routeName")}
								closeDropdown={() => setShowRouteSuggestions(false)}
							/>
						)}
					</div>
					<div className="md:w-1/3 md:m-2">
						<label className="label font-bold uppercase">Grado</label>
						<select
							name="routeGrade"
							className="select-bordered w-full py-1 px-2 bg-secondary  text-slate-800 rounded-full"
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
					<div className="md:w-1/3 md:m-2">
						<label className="label font-bold uppercase">Altura</label>
						<input
							name="routeHeight"
							type="number"
							value={form.routeHeight}
							onChange={handleChange}
							required
							autoComplete="off"
							className="input input-sm input-bordered rounded-full text-slate-800 bg-secondary w-full"
						/>
					</div>
					<button
						type="submit"
						onClick={handleSubmit}
						className="btn btn-primary rounded-full w-full my-10 uppercase text-base-content md:w-1/2 ">
						Agregar Vía
					</button>
				</form>
			</div>
		</>
	);
};
