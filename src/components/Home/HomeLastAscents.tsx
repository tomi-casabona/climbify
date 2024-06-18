import { useContext } from "react";
import { ScaleContext } from "../../context/gradeContext";
import type { Route } from "../../types/dataTypes";
import { ScaleContextType } from "../../types/gradeType";
import { useNavigate } from "react-router-dom";

export const HomeLastAscents = ({ route, index }: { route: Route; index: number }) => {
	const navigate = useNavigate();
	const routeName =
		route.routeName.length > 10 ? route.routeName.substring(0, 10) + "..." : route.routeName;

	const esPar = index % 2 === 0 ? true : false;

	const { scale } = useContext(ScaleContext) as ScaleContextType;

	return (
		<div className="inline-block mx-1 " onClick={() => navigate(`routes/route/${route.routeId}`)}>
			<div
				className={`w-48 h-48 p-3 active:scale-105 duration-200 rounded-full ${esPar ? "bg-neutral-content" : "bg-neutral my-4"} flex flex-col justify-center items-center text-center object-center font-bold`}>
				<div className="h-2/5 flex items-end">
					<p
						className={`text-xl uppercase text-wrap ${esPar ? "text-neutral" : "text-neutral-content"}`}>
						{routeName}
					</p>
				</div>
				<div className="h-3/5">
					<p className="text-7xl text-primary">{scale.grades[route.routeGrade]}</p>
				</div>
			</div>
		</div>
	);
};
