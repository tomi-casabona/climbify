import { useSelector } from "react-redux";
import { Route } from "../types/dataTypes";
import { RootState } from "../redux/store";
import { ScaleContextType } from "../types/gradeType";
import { ScaleContext } from "../context/gradeContext";
import { useContext, useEffect, useState } from "react";
import { calculateCompletedRoutes } from "../services/routeServices/calculatedData/calculateCompletedRoutes";
import { getMaxCompletedGrade } from "../services/routeServices/calculatedData/getMaxCompletedGrade";
import { calculateTotalHeight } from "../services/routeServices/calculatedData/calculateTotalHeight";
import { CompletedRoutes } from "../components/Stats/CompletedRoutes";
import { PyramidComponent } from "../components/Stats/PyramidComponent";
import { TotalHeightComponent } from "../components/Stats/TotalHeightComponent";
import { CompletedRoutesGraph } from "../components/Stats/CompletedRoutesGraph";

export const Stats = () => {
	const routesFirebase: Route[] = useSelector((state: RootState) => state.routes.data) as Route[];
	const { scale } = useContext(ScaleContext) as ScaleContextType;
	const [totalCompletedRoutes, setTotalCompletedRoutes] = useState(0);
	const [maxGrade, setMaxGrade] = useState(0);
	const [totalHeight, setTotalHeight] = useState(0);

	useEffect(() => {
		if (routesFirebase) {
			setTotalCompletedRoutes(calculateCompletedRoutes(routesFirebase));
			setMaxGrade(getMaxCompletedGrade(routesFirebase));
			setTotalHeight(calculateTotalHeight(routesFirebase));
		}
	}, [routesFirebase]);

	return (
		<div className="flex py-10  flex-col justify-center w-full animate-fadeIn md:w-10/12 md:mx-auto">
			<h1 className="text-center flex items-center px-5 font-bold text-4xl uppercase my-5">
				Estadísticas
			</h1>
			<div className="flex my-3 gap-3 px-5">
				<div className="flex flex-col w-1/2 text-center items-center bg-accent rounded-[2rem] relative">
					<h3 className="uppercase font-bold pt-5">Tu máximo</h3>
					<button className="absolute top-2 right-2 btn btn-circle animate-pulse">
						{" "}
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

					<dialog id="my_modal_5" className="modal">
						<div className="modal-box w-2/3">
							<h3 className="font-bold text-lg text-center">
								Este es el grado máximo que has conseguido encadenar.
							</h3>
						</div>
						<form method="dialog" className="modal-backdrop">
							<button>close</button>
						</form>
					</dialog>

					<h3 className="text-5xl font-bold text-primary pb-4">
						{totalCompletedRoutes === 0 ? "..." : scale.grades[maxGrade]}
					</h3>
				</div>
			</div>
			<div className="flex my-3 gap-3 px-5">
				<div className="flex flex-col w-1/2 gap-3">
					<TotalHeightComponent totalHeight={totalHeight} />
					<CompletedRoutesGraph totalRoutes={totalCompletedRoutes} routes={routesFirebase} />
				</div>
				<PyramidComponent />
			</div>
			<h1 className=" px-5 font-bold text-4xl uppercase my-5 ">Resultados</h1>
			<CompletedRoutes routes={routesFirebase} />
		</div>
	);
};
