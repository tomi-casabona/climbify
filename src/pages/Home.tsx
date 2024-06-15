import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { calculateCompletedRoutes } from "../services/calculateCompletedRoutes";
import { filterLastSevenRoutes } from "../services/filterLastSevenRoutes";
import type { Route } from "../types/dataTypes";
import { HomeCard } from "../components/Home/HomeCard";
import { HomeLastAscents } from "../components/Home/HomeLastAscents";
import { useEffect, useState } from "react";

export const Home: React.FC = () => {
  const usuario = useSelector((state: RootState) => state.user);
  const routesFirebase: Route[] = useSelector(
    (state: RootState) => state.routes.data
  ) as Route[];

  const [totalCompletedRoutes, setTotalCompletedRoutes] = useState(0);
  const [lastRoutes, setLastRoutes] = useState<Route[]>([]);
  const [totalRoutes, setTotalRoutes] = useState<Route[]>([]);

  console.log(routesFirebase);
  useEffect(() => {
    if (routesFirebase) {
      console.log(routesFirebase);
      const completedRoutes = calculateCompletedRoutes(routesFirebase);
      console.log(completedRoutes);
      const lastSevenRoutes = filterLastSevenRoutes(routesFirebase);
      console.log(lastSevenRoutes);

      setTotalCompletedRoutes(completedRoutes);
      setLastRoutes(lastSevenRoutes);
      setTotalRoutes(routesFirebase);
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
          mainNumber={"6c"} // cambiar por max-grade
          secondaryNumber={"6b"} // cambiar por med-grade
          content="grade-info"
        />
        <h2 className="py-5 text-2xl mx-5">Últimos ascensos</h2>
        <div className="flex overflow-auto whitespace-nowrap no-scrollbar scroll-smooth">
          {totalRoutes.map((route, index) => {
            if (index < 2)
              return (
                <HomeLastAscents key={index} route={route} index={index} />
              );
          })}
        </div>
      </div>
    </>
  );
};
