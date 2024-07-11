import type { actualState } from "../../types/dataTypes";

export const getSuggestionsForLocations = (
	inputValue: string,
	actualState: actualState
): string[] => {
	// Ejemplo de lógica para obtener sugerencias basadas en el estado actual de locations
	const { locations } = actualState;

	// Verifica si locations.data está definido y es un array
	if (locations.data && Array.isArray(locations.data)) {
		// Filtra locations.data por locationName que incluya el inputValue
		const filteredLocations = locations.data
			.filter((location) => location.locationName.toLowerCase().includes(inputValue.toLowerCase()))
			.map((location) => location.locationName); // Mapea los nombres de ubicación

		return filteredLocations; // Devuelve el array de nombres de ubicación filtrados
	} else {
		return []; // Devuelve un array vacío si no hay datos o no es un array
	}
};
export const getSuggestionsForSchools = (
	inputValue: string,
	actualState: actualState
): string[] => {
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
export const getSuggestionsForSectors = (
	inputValue: string,
	actualState: actualState
): string[] => {
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
export const getSuggestionsForRoutes = (inputValue: string, actualState: actualState): string[] => {
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
