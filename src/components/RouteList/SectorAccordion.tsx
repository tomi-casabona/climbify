import { useSelector } from "react-redux";
import { Sector } from "../../types/dataTypes";
import { RootState } from "../../redux/store";
import { RouteCard } from "./RouteCard";

export const SectorAccordion = ({ sectorIndex }: { sectorIndex: number }) => {
	const sectors: Sector[] | null = useSelector((state: RootState) => state.sectors.data);

	return (
		<>
			<div className="collapse overflow-clip collapse-arrow bg-custom-brown text-black mt-2">
				<input type="checkbox" name={`sector-accordion-${sectorIndex}`} />
				<div className="collapse-title text-l capitalize font-bold">
					{sectors ? sectors[sectorIndex].sectorName : "No hay ninguna escuela."}
				</div>
				{sectors && (
					<div className="collapse-content">
						{sectors[sectorIndex].routes.map((route, index) => (
							<RouteCard key={index} routeIndex={route} />
						))}
					</div>
				)}
			</div>
		</>
	);
};
