import { Location } from "../../types/dataTypes";

export const LocationAccordion = ({ location, index }: { location: Location; index: number }) => {
	return (
		<>
			<div className="collapse overflow-clip collapse-arrow bg-secondary text-black">
				<input type="checkbox" name={`accordion-${index}`} />
				<div className="collapse-title text-xl font-medium capitalize">{location.locationName}</div>
				<div className="collapse-content">
					<p>Index: {index}</p>
				</div>
			</div>
		</>
	);
};
