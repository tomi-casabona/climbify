import { useContext } from "react";
import { ScaleContext } from "../../context/gradeContext";
import { Route } from "../../types/dataTypes";
import { ScaleContextType } from "../../types/gradeType";

export const CompletedRoutes = ({ routes }: { routes: Route[] }) => {
	const { scale } = useContext(ScaleContext) as ScaleContextType;

	const calculateTotal = (routes: Route[], gradeIndex: number) => {
		let total = 0;
		routes.forEach((route) => {
			if (route.completed && route.routeGrade == gradeIndex) {
				total++;
			}
		});
		return total;
	};

	return (
		<div className="w-[90%] mx-auto rounded-[2rem] bg-base-content p-5 mb-10">
			<h4 className="font-bold text-2xl text-center uppercase flex items-center gap-3 text-base-100 mb-3">
				Vías encadenadas
			</h4>

			<div className="flex flex-wrap">
				{scale.grades.map((grade, index) => {
					return (
						<li className="w-1/2 flex" key={index}>
							<p className="text-primary font-bold text-2xl mx-3">{grade}: </p>
							<p className="text-secondary font-bold text-2xl me-3">
								{calculateTotal(routes, index)}
							</p>
						</li>
					);
				})}
			</div>
		</div>
	);
};
