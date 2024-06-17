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
			setMaxGrade(getMaxCompletedGrade(routesFirebase)); // work with numbers
			setMidGrade(calculateMidGrade(routesFirebase)); // work with numbers
			setTotalHeight(calculateTotalHeight(routesFirebase));
		}
	}, [routesFirebase]);

	return (
		<div className="h-full flex py-10 px-5 flex-col justify-center overflow-auto w-full">
			<h1 className="text-center flex items-center px-5 font-bold text-5xl uppercase my-5">
				Estadísticas
			</h1>
			<div className="flex flex-col justify-center text-center items-center w-2/3 bg-base-200 rounded-[2rem] mx-auto relative">
				<h3 className="uppercase font-bold p-5">Tu grado</h3>
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
				<h3 className="text-5xl font-bold text-primary p-4">
					{totalCompletedRoutes === 0 ? "..." : scale.grades[maxGrade]}
				</h3>
			</div>
			<div className="flex my-3 gap-3 overflow-auto">
				<div className="flex flex-col w-1/2 gap-3">
					<div className="h-[10rem] w-full bg-secondary rounded-[2rem] flex flex-col justify-center items-center">
						<h4 className="font-bold uppercase flex items-center gap-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="20"
								width="15"
								viewBox="0 0 384 512"
								fill="currentColor">
								<path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
							</svg>
							Escalado
						</h4>
						<p className="font-bold text-5xl text-primary">{totalHeight}m</p>
					</div>
					<div className="h-[40rem] w-full bg-secondary rounded-[2rem]"></div>
				</div>
				<div className="flex-1 w-1/2 rounded-[2rem] bg-base-content"></div>
			</div>
		</div>
	);
};
