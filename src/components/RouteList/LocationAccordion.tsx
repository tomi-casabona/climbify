import { Location } from "../../types/dataTypes";
import { SchoolAccordion } from "./SchoolAccordion";

export const LocationAccordion = ({ location, index }: { location: Location; index: number }) => {
	return (
		<>
			<div className="collapse overflow-clip collapse-arrow bg-secondary-darker text-black">
				<input type="checkbox" name={`location-accordion-${index}`} />
				<div className="collapse-title text-xl font-bold capitalize">{location.locationName}</div>
				<div className="collapse-content ">
					{location.schools.map((school, index) => {
						return <SchoolAccordion key={index} schoolIndex={school} />;
					})}
				</div>
			</div>
		</>
	);
};
