import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { School } from "../../types/dataTypes";
import { SectorAccordion } from "./SectorAccordion";

export const SchoolAccordion = ({ schoolIndex }: { schoolIndex: number }) => {
	const schools: School[] | null = useSelector((state: RootState) => state.schools.data);

	return (
		<>
			<div className="collapse collapse-arrow bg-secondary text-black my-2 ">
				<input type="checkbox" name={`school-accordion-${schoolIndex}`} />
				<div className="collapse-title text-l font-bold capitalize">
					{schools ? schools[schoolIndex].schoolName : "No hay ninguna escuela."}
				</div>
				{schools && (
					<div className="collapse-content">
						{schools[schoolIndex].sectors.map((sector, index) => {
							return <SectorAccordion key={index} sectorIndex={sector} />;
						})}
					</div>
				)}
			</div>
		</>
	);
};
