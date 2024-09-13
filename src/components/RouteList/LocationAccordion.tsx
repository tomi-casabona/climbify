import { Location } from "../../types/dataTypes";
import { SchoolAccordion } from "./SchoolAccordion";

export const LocationAccordion = ({ location }: { location: Location }) => {
	return (
		<>
			<div className="rounded-2xl w-full md:w-1/3 md:mx-4 bg-secondary-darker mb-2 p-2">
				<div className="text-xl p-2 font-bold capitalize text-black md:text-center">
					{location.locationName}
				</div>
				{location.schools.map((school, index) => {
					return <SchoolAccordion key={index} schoolIndex={school} />;
				})}
			</div>
		</>
	);
};
