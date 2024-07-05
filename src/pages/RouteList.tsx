import { useSelector } from "react-redux";
import { Location } from "../types/dataTypes";
import { RootState } from "../redux/store";
import { LocationAccordion } from "../components/RouteList/LocationAccordion";

export const RouteList = () => {
	const locations: Location[] | null = useSelector((state: RootState) => state.locations.data);

	return (
		<div className="py-5 mb-5 flex flex-col h-screen">
			<h1 className="p-5 uppercase font-bold text-5xl">Tus vías</h1>
			<div className="flex flex-col overflow-auto whitespace-nowrap no-scrollbar scroll-smooth h-5/6">
				{locations?.map((location, index) => {
					return <LocationAccordion key={index} location={location} index={index} />;
				})}
			</div>
		</div>
	);
};
