import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { calculateCompletedRoutes } from "../services/calculateCompletedRoutes";
import { filterLastSevenRoutes } from "../services/filterLastSevenRoutes";
import type { Route } from "../types/dataTypes";
import { HomeCard } from "../components/Home/HomeCard";
import { HomeLastAscents } from "../components/Home/HomeLastAscents";
import { useEffect, useState } from "react";
import { getMaxCompletedGrade } from "../services/getMaxCompletedGrade";
import { calculateMidGrade } from "../services/calculateMidGrade";

export const Home: React.FC = () => {
  const usuario = useSelector((state: RootState) => state.user);
  const routesFirebase: Route[] = useSelector(
    (state: RootState) => state.routes.data
  ) as Route[];

  const [totalCompletedRoutes, setTotalCompletedRoutes] = useState(0);
  const [lastRoutes, setLastRoutes] = useState<Route[]>([]);
  const [totalRoutes, setTotalRoutes] = useState<Route[]>([]);
  const [maxGrade, setMaxGrade] = useState(0);
  const [midGrade, setMidGrade] = useState(0);

  useEffect(() => {
    if (routesFirebase) {
      setTotalCompletedRoutes(calculateCompletedRoutes(routesFirebase));
      setLastRoutes(filterLastSevenRoutes(routesFirebase));
      setTotalRoutes(routesFirebase);
      setMaxGrade(getMaxCompletedGrade(routesFirebase)); // work with numbers
      setMidGrade(calculateMidGrade(routesFirebase)); // work with numbers
    }
  }, [routesFirebase]);

  return (
    <>
      <div className="py-5 my-5">
        <div className="p-5 mx-5">
          <p>Hola {usuario.info ? usuario.info.displayName : "climber"}!</p>
          <h1 className="font-bold text-5xl uppercase">Resumen</h1>
        </div>
        <HomeCard
          mainNumber={`${totalCompletedRoutes}`}
          secondaryNumber={`${lastRoutes.length}`}
          content="total-routes"
        />
        <HomeCard
          mainNumber={`${maxGrade}`} // cambiar por max-grade
          secondaryNumber={`${midGrade}`} // cambiar por med-grade
          content="grade-info"
        />
        <h2 className="py-5 text-2xl mx-5">Últimos ascensos</h2>
        <div className="flex overflow-auto whitespace-nowrap no-scrollbar scroll-smooth">
          {totalRoutes.map((route, index) => {
            if (index < 7)
              return (
                <HomeLastAscents key={index} route={route} index={index} />
              );
          })}
        </div>
      </div>
    </>
  );
};
