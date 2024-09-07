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
		<div className="w-[90%] mx-auto rounded-[2rem] bg-base-300 p-5 mb-10">
			<h4 className="font-bold text-2xl text-center text-secondary uppercase items-center gap-3 m-5">
				Vías encadenadas
			</h4>

			<div className="flex flex-wrap">
				{scale.grades.map((grade, index) => {
					return (
						<div className="flex w-1/2 justify-evenly md:w-1/4" key={index}>
							<li className="flex text-center">
								<p className="text-primary font-bold text-2xl mx-3">{grade}: </p>
								<p className="text-secondary font-bold text-2xl me-3">
									{calculateTotal(routes, index)}
								</p>
							</li>
						</div>
					);
				})}
			</div>
		</div>
	);
};
