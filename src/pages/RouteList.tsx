import { useSelector } from "react-redux";
import { RouteCard } from "../components/RouteList/RouteCard";
import { Route } from "../types/dataTypes";
import type { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { filterByRouteName } from "../services/routeServices/filters/filterByRouteName";
import { showModal } from "../services/routeServices/showModal";
import { applySorting } from "../services/routeServices/applySorting";
import { FilterModal } from "../components/FilterModal";
export const RouteList = () => {
	const [query, setQuery] = useState("");
	const [filteredRoutes, setFilteredRoutes] = useState<Route[]>([]);
	const [selectedOrder, setSelectedOrder] = useState<string>("recentDate");

	const routes: Route[] | null = useSelector(
		(state: RootState) => state.routes.data
	);

	useEffect(() => {
		if (routes) {
			setFilteredRoutes(routes); // Inicializa filteredRoutes con routes cuando se carguen los datos
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
				></input>
				<button className="btn rounded-full" onClick={showModal}>
					Order By{" "}
				</button>
				<FilterModal
					selectedOrder={selectedOrder}
					handleCheckboxChange={handleCheckboxChange}
					handleFilterClick={handleFilterClick}
				/>
			</div>
			<div className="flex flex-col overflow-y-auto whitespace-nowrap no-scrollbar scroll-smooth">
				{filteredRoutes?.map((route, index) => {
					return <RouteCard key={index} route={route} />;
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
