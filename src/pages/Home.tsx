import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { calculateCompletedRoutes } from "../services/routeServices/calculatedData/calculateCompletedRoutes";
import type { Route } from "../types/dataTypes";
import { HomeCard } from "../components/Home/HomeCard";
import { useContext, useEffect, useState } from "react";
import { filterLastSevenRoutes } from "../services/routeServices/filters/filterLastSevenRoutes";
import { getMaxCompletedGrade } from "../services/routeServices/calculatedData/getMaxCompletedGrade";
import { calculateMidGrade } from "../services/routeServices/calculatedData/calculateMidGrade";
import { ScaleContextType } from "../types/gradeType";
import { ScaleContext } from "../context/gradeContext";
import { routesPrueba } from "../data/prueba";
import { AutoScroll } from "../components/Home/AutoScroll";

export const Home: React.FC = () => {
	const usuario = useSelector((state: RootState) => state.user);
	const routesFirebase: Route[] = useSelector((state: RootState) => state.routes.data) as Route[];
	const { scale } = useContext(ScaleContext) as ScaleContextType;
	const [totalCompletedRoutes, setTotalCompletedRoutes] = useState(0);
	const [lastRoutes, setLastRoutes] = useState<Route[]>([]);
	const [totalRoutes, setTotalRoutes] = useState<Route[]>([]);
	const [maxGrade, setMaxGrade] = useState(0);
	const [midGrade, setMidGrade] = useState(0);

	useEffect(() => {
		if (routesFirebase) {
			setTotalCompletedRoutes(calculateCompletedRoutes(routesFirebase));
			routesFirebase.length > 0 && setLastRoutes(filterLastSevenRoutes(routesFirebase));
			const totalLastRoutes = [...routesFirebase];
			setTotalRoutes(totalLastRoutes.reverse());
			setMaxGrade(getMaxCompletedGrade(routesFirebase));
			setMidGrade(calculateMidGrade(routesFirebase));
		}
	}, [routesFirebase]);

	return (
		<>
			<div className="h-screen w-full py-5 animate-fadeIn md:w-10/12 md:mx-auto md:h-auto">
				<div className="p-5 mx-5 h-[15%] block md:h-auto text-xl ">
					<p>
						Hola <strong>{usuario.info ? usuario.info.displayName : "climber"}!</strong>
					</p>
					<h1 className="font-bold text-3xl uppercase md:mt-2 md:text-center">Tu actividad</h1>
				</div>
				<div className="h-[35%] overflow-hidden flex flex-col items-center justify-center w-full px-5 md:h-auto md:flex-row md:justify-around">
					<HomeCard
						mainNumber={`${totalCompletedRoutes}`}
						secondaryNumber={`${lastRoutes.length}`}
						content="total-routes"
					/>
					<HomeCard
						mainNumber={`${totalCompletedRoutes === 0 ? "..." : scale.grades[maxGrade]}`}
						secondaryNumber={`${totalCompletedRoutes === 0 ? "..." : scale.grades[midGrade]}`}
						content="grade-info"
					/>
				</div>

				<h2 className="p-5 mx-5 h-[10%] text-2xl ">Últimos ascensos</h2>
				<AutoScroll totalRoutes={totalRoutes} routesPrueba={routesPrueba} />
			</div>
		</>
	);
};
