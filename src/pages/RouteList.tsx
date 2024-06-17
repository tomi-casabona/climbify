import { useSelector } from "react-redux";
import { RouteCard } from "../components/RouteList/RouteCard";
import { Route, School, Sector } from "../types/dataTypes";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { filterByRouteName } from "../services/routeServices/filters/filterByRouteName";
import { showModal } from "../services/routeServices/showModal";
import { applySorting } from "../services/routeServices/applySorting";
import { FilterModal } from "../components/FilterModal";

export const RouteList = () => {
	const [query, setQuery] = useState("");
	const [filteredRoutes, setFilteredRoutes] = useState<Route[]>([]);
	const [selectedOrder, setSelectedOrder] = useState<string>("recentDate");

	const routes: Route[] | null = useSelector((state: RootState) => state.routes.data);
	const schools: School[] | null = useSelector((state: RootState) => state.schools.data);
	const sectors: Sector[] | null = useSelector((state: RootState) => state.sectors.data);

	useEffect(() => {
		if (routes) {
			setFilteredRoutes(routes); // Initialize filteredRoutes with routes when data is loaded
		}
	}, [routes]);

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const newQuery = e.target.value;
		setQuery(newQuery);
		if (routes) {
			const filtered = filterByRouteName(routes, newQuery);
			setFilteredRoutes(filtered);
		}
	}

	function handleCheckboxChange(order: string) {
		setSelectedOrder(order === selectedOrder ? "" : order);
	}

	const handleFilterClick = () => {
		setFilteredRoutes(applySorting(selectedOrder, filteredRoutes));
	};

	return (
		<div className="py-5 my-5 flex flex-col h-screen">
			<h1 className="p-5 uppercase font-bold text-5xl">Tus vías</h1>
			<div className="flex justify-around items-center gap-3 w-11/12 mx-auto pb-3 border-b border-neutral">
				<input
					type="text"
					placeholder="Buscar"
					value={query}
					className="input w-10/12 mx-auto rounded-full bg-neutral-content text-base-100"
					onChange={handleInputChange}
				/>
				<button className="btn rounded-full" onClick={showModal}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20"
						width="12.5"
						viewBox="0 0 320 512"
						fill="currentColor">
						<path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
					</svg>
				</button>
				<FilterModal
					selectedOrder={selectedOrder}
					handleCheckboxChange={handleCheckboxChange}
					handleFilterClick={handleFilterClick}
				/>
			</div>
			<div className="flex flex-col overflow-y-auto whitespace-nowrap no-scrollbar scroll-smooth">
				{filteredRoutes?.map((route, index) => {
					// Ensure data exists before accessing indices
					const schoolName: string =
						schools && schools[route.schoolIndex] ? schools[route.schoolIndex].schoolName : "";
					const sectorName =
						sectors && sectors[route.sectorIndex] ? sectors[route.sectorIndex].sectorName : "";

					return <RouteCard key={index} route={route} school={schoolName} sector={sectorName} />;
				})}
				<div className="p-14 w-full bg-transparent"></div>
			</div>
			<div className="fixed bottom-0 w-full">
				<div className="bg-gradient-to-t from-base-100 to-transparent w-full p-4"></div>
				<div className="bg-base-100 w-full p-16"></div>
			</div>
		</div>
	);
};
