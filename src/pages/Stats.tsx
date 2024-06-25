import { useSelector } from "react-redux";
import { Route } from "../types/dataTypes";
import { RootState } from "../redux/store";
import { ScaleContextType } from "../types/gradeType";
import { ScaleContext } from "../context/gradeContext";
import { useContext, useEffect, useState } from "react";
import { calculateCompletedRoutes } from "../services/routeServices/calculatedData/calculateCompletedRoutes";
import { filterLastSevenRoutes } from "../services/routeServices/filters/filterLastSevenRoutes";
import { getMaxCompletedGrade } from "../services/routeServices/calculatedData/getMaxCompletedGrade";
import { calculateMidGrade } from "../services/routeServices/calculatedData/calculateMidGrade";
import { calculateTotalHeight } from "../services/routeServices/calculatedData/calculateTotalHeight";
import { CompletedRoutes } from "../components/Stats/CompletedRoutes";
import { PyramidComponent } from "../components/Stats/PyramidComponent";
import { TotalHeightComponent } from "../components/Stats/TotalHeightComponent";
import { CompletedRoutesGraph } from "../components/Stats/CompletedRoutesGraph";

export const Stats = () => {
	const usuario = useSelector((state: RootState) => state.user);
	const routesFirebase: Route[] = useSelector((state: RootState) => state.routes.data) as Route[];
	const { scale } = useContext(ScaleContext) as ScaleContextType;
	const [totalCompletedRoutes, setTotalCompletedRoutes] = useState(0);
	const [lastRoutes, setLastRoutes] = useState<Route[]>([]);
	const [totalRoutes, setTotalRoutes] = useState<Route[]>([]);
	const [maxGrade, setMaxGrade] = useState(0);
	const [midGrade, setMidGrade] = useState(0);
	const [totalHeight, setTotalHeight] = useState(0);

	useEffect(() => {
		if (routesFirebase) {
			setTotalCompletedRoutes(calculateCompletedRoutes(routesFirebase));
			setLastRoutes(filterLastSevenRoutes(routesFirebase));
			setTotalRoutes(routesFirebase);
			setMaxGrade(getMaxCompletedGrade(routesFirebase)); 
			setMidGrade(calculateMidGrade(routesFirebase)); 
			setTotalHeight(calculateTotalHeight(routesFirebase));
		}
	}, [routesFirebase]);

	return (
		<div className="flex py-10  flex-col justify-center w-full">
			<h1 className="text-center flex items-center px-5 font-bold text-5xl uppercase my-5">
				Estadísticas
			</h1>
			<div className="flex flex-col justify-center text-center items-center w-2/3 bg-accent rounded-[2rem] mx-auto relative">
				<h3 className="uppercase font-bold pt-5">Tu máximo</h3>
				<button className="absolute top-2 right-2 btn btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</button>
				<h3 className="text-5xl font-bold text-primary pb-4">
					{totalCompletedRoutes === 0 ? "..." : scale.grades[maxGrade]}
				</h3>
			</div>
			<div className="flex my-3 gap-3 px-5">
				<div className="flex flex-col w-1/2 gap-3">
					<TotalHeightComponent totalHeight={totalHeight} />
					<CompletedRoutesGraph totalRoutes={totalCompletedRoutes} routes={routesFirebase} />
				</div>
				<PyramidComponent />
			</div>
			<h1 className=" px-5 font-bold text-5xl uppercase my-5 text-center">Resultados</h1>
			<CompletedRoutes routes={routesFirebase} />
		</div>
	);
};
