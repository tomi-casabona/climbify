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
import { useEffect, useRef } from "react";

const useOutsideClick = (callback: () => void) => {
	const ref = useRef<HTMLUListElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [callback]);

	return ref;
};
interface SuggestionsDropdownProps {
	suggestions: string[];
	onSelectSuggestion: (suggestion: string) => void;
	closeDropdown: () => void;
}

const SuggestionsDropdown: React.FC<SuggestionsDropdownProps> = ({
	suggestions,
	onSelectSuggestion,
	closeDropdown,
}) => {
	const ref = useOutsideClick(closeDropdown);

	if (suggestions.length === 0) return null;
	console.log(suggestions);

	return (
		<ul
			ref={ref}
			className="dropdown-menu absolute z-10 w-full mt-1 bg-white rounded-lg border border-gray-300 shadow-lg text-black">
			{suggestions.map((suggestion, index) => (
				<li
					key={index}
					className="dropdown-item cursor-pointer px-4 py-2 hover:bg-gray-100"
					onClick={() => {
						onSelectSuggestion(suggestion);
						closeDropdown();
					}}>
					{suggestion}
				</li>
			))}
		</ul>
	);
};

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
	const [suggestions, setSuggestions] = useState<string[]>([]); // Estado para almacenar las sugerencias
	const [showLocationSuggestions, setShowLocationSuggestions] = useState(false); // Estado para controlar la visibilidad del dropdown
	const [showSchoolSuggestions, setShowSchoolSuggestions] = useState(false);
	const [showSectorSuggestions, setShowSectorSuggestions] = useState(false);
	const [showRouteSuggestions, setShowRouteSuggestions] = useState(false);

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
			const suggestions = getSuggestionsForLocations(value); // Función que obtiene las sugerencias
			setSuggestions(suggestions);
			setShowLocationSuggestions(true);
		}
		if (name === "schoolName") {
			const suggestions = getSuggestionsForSchools(value);
			setSuggestions(suggestions);
			setShowSchoolSuggestions(true);
		}
		if (name === "sectorName") {
			const suggestions = getSuggestionsForSectors(value);
			setSuggestions(suggestions);
			setShowSectorSuggestions(true);
		}
		if (name === "routeName") {
			const suggestions = getSuggestionsForRoutes(value);
			setSuggestions(suggestions);
			setShowRouteSuggestions(true);
		}
	};

	const handleClick = (event: React.MouseEvent<HTMLInputElement>): void => {
		const { name, value } = event.target as HTMLInputElement;

		console.log("Name:", name);
		console.log("Value:", value);
		console.log(suggestions);

		if (name === "locationName") {
			const suggestions = getSuggestionsForLocations("");
			setSuggestions(suggestions);
			setShowLocationSuggestions(true);
		}
		if (name === "schoolName") {
			const suggestions = getSuggestionsForSchools("");
			setSuggestions(suggestions);
			setShowSchoolSuggestions(true);
		}
		if (name === "sectorName") {
			const suggestions = getSuggestionsForSectors("");
			setSuggestions(suggestions);
			setShowSectorSuggestions(true);
		}
		if (name === "routeName") {
			const suggestions = getSuggestionsForRoutes("");
			setSuggestions(suggestions);
			setShowRouteSuggestions(true);
		}
	};

	const getSuggestionsForLocations = (inputValue: string): string[] => {
		// Ejemplo de lógica para obtener sugerencias basadas en el estado actual de locations
		const { locations } = actualState;

		// Verifica si locations.data está definido y es un array
		if (locations.data && Array.isArray(locations.data)) {
			// Filtra locations.data por locationName que incluya el inputValue
			const filteredLocations = locations.data
				.filter((location) =>
					location.locationName.toLowerCase().includes(inputValue.toLowerCase())
				)
				.map((location) => location.locationName); // Mapea los nombres de ubicación

			return filteredLocations; // Devuelve el array de nombres de ubicación filtrados
		} else {
			return []; // Devuelve un array vacío si no hay datos o no es un array
		}
	};
	const getSuggestionsForSchools = (inputValue: string): string[] => {
		// Ejemplo de lógica para obtener sugerencias basadas en el estado actual de schools
		const { schools } = actualState;

		// Verifica si schools.data está definido y es un array
		if (schools.data && Array.isArray(schools.data)) {
			// Filtra schools.data por schoolsName que incluya el inputValue
			const filteredSchools = schools.data
				.filter((school) => school.schoolName.toLowerCase().includes(inputValue.toLowerCase()))
				.map((school) => school.schoolName); // Mapea los nombres de las schools

			return filteredSchools; // Devuelve el array de nombres de schools filtrados
		} else {
			return []; // Devuelve un array vacío si no hay datos o no es un array
		}
	};
	const getSuggestionsForSectors = (inputValue: string): string[] => {
		// Ejemplo de lógica para obtener sugerencias basadas en el estado actual de Sectors
		const { sectors } = actualState;

		// Verifica si sectors.data está definido y es un array
		if (sectors.data && Array.isArray(sectors.data)) {
			// Filtra sectors.data por sectorName que incluya el inputValue
			const filteredSectors = sectors.data
				.filter((sector) => sector.sectorName.toLowerCase().includes(inputValue.toLowerCase()))
				.map((sector) => sector.sectorName); // Mapea los nombres de las sectors

			return filteredSectors; // Devuelve el array de nombres de sectors filtrados
		} else {
			return []; // Devuelve un array vacío si no hay datos o no es un array
		}
	};
	const getSuggestionsForRoutes = (inputValue: string): string[] => {
		// Ejemplo de lógica para obtener sugerencias basadas en el estado actual de Routes
		const { routes } = actualState;

		// Verifica si sectors.data está definido y es un array
		if (routes.data && Array.isArray(routes.data)) {
			// Filtra routes.data por routeName que incluya el inputValue
			const filteredRoutes = routes.data
				.filter((route) => route.routeName.toLowerCase().includes(inputValue.toLowerCase()))
				.map((route) => route.routeName); // Mapea los nombres de las routes

			return filteredRoutes; // Devuelve el array de nombres de routes filtrados
		} else {
			return []; // Devuelve un array vacío si no hay datos o no es un array
		}
	};

	const handleSelectSuggestion = (suggestion: string, fieldName: string) => {
		setForm({
			...form,
			[fieldName]: suggestion,
		});
		setShowLocationSuggestions(false);
		setShowSchoolSuggestions(false);
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
		navigate(`route/${newRoutes[newRoutes.length - 1].routeId}`);
	};

	return (
		<>
			<div className="h-screen w-full bg-black -z-50 fixed"></div>
			<div className="h-screen mx-auto bg-base-100 p-10 animate-fadeIn">
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
				<h1 className="font-bold text-5xl uppercase my-5">Nueva vía</h1>
				<form onSubmit={handleSubmit} className="h-10/12 overflow-y-auto">
					<div>
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
					<div>
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
					<div>
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
					<div>
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
					<div>
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
					<div className="pb-3">
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
						className="btn btn-primary rounded-full w-full my-10 uppercase text-base-content">
						Agregar Vía
					</button>
				</form>
			</div>
		</>
	);
};
