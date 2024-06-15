import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { calculateCompletedRoutes } from "../services/calculateCompletedRoutes";
import { filterLastSevenRoutes } from "../services/filterLastSevenRoutes";
import type { Route } from "../types/dataTypes";
import { HomeCard } from "../components/Home/HomeCard";
import { HomeLastAscents } from "../components/Home/HomeLastAscents";

export const Home: React.FC = () => {
  const usuario = useSelector((state: RootState) => state.user);
  const routesFirebase: Route[] = useSelector(
    (state: RootState) => state.routes.data
  ) as Route[];

  const totalCompletedRoutes: number = calculateCompletedRoutes(routesFirebase);

  /// Rutas de prueba con fechas distintas
  const routesPrueba: Route[] = [
    {
      completed: true,
      locationIndex: 0,
      routeAttempts: [
        {
          id: "4ef5f79a-0130-4908-b398-e29f6e97d07d",
          date: new Date("2024-06-01"),
          completed: true,
        },
        {
          id: "4ef5f79a-0130-4908-b398-e29f6e97d07d",
          date: new Date("2024-06-12"),
          completed: true,
        },
      ],
      routeComments: [],
      routeGrade: 22,
      routeHeight: 22,
      routeId: "4ef5f79a-0130-4908-b398-e29f6e97d07d",
      routeName: "baaaaaaaaaaa",
      schoolIndex: 0,
      sectorIndex: 0,
    },
    {
      completed: true,
      locationIndex: 0,
      routeAttempts: [
        {
          id: "4ef5f79a-0130-4908-b398-e29f6e97d07d",
          date: new Date("2024-06-10"),
          completed: true,
        },
      ],
      routeComments: [],
      routeGrade: 22,
      routeHeight: 22,
      routeId: "4ef5f79a-0130-4908-b398-e29f6e97d07d",
      routeName: "caaaaaaaaaaaaaaaa",
      schoolIndex: 0,
      sectorIndex: 0,
    },
    {
      completed: true,
      locationIndex: 0,
      routeAttempts: [
        {
          id: "4ef5f79a-0130-4908-b398-e29f6e97d07d",
          date: new Date("2024-06-05"),
          completed: true,
        },
      ],
      routeComments: [],
      routeGrade: 22,
      routeHeight: 22,
      routeId: "4ef5f79a-0130-4908-b398-e29f6e97d07d",
      routeName: "saaaaaaaaaaaaaaaaaa",
      schoolIndex: 0,
      sectorIndex: 0,
    },
    {
      completed: true,
      locationIndex: 0,
      routeAttempts: [
        {
          id: "4ef5f79a-0130-4908-b398-e29f6e97d07d",
          date: new Date("2024-06-04"),
          completed: true,
        },
      ],
      routeComments: [],
      routeGrade: 22,
      routeHeight: 22,
      routeId: "4ef5f79a-0130-4908-b398-e29f6e97d07d",
      routeName: "asd",
      schoolIndex: 0,
      sectorIndex: 0,
    },
  ];

  const lastRoutes: Route[] = filterLastSevenRoutes(routesPrueba);
  console.log(lastRoutes);
  return (
    <>
      <div className="py-5 my-5">
        <div className="p-5 mx-5">
          <p>Hola {usuario.info ? usuario.info.displayName : "climber"}!</p>
          <h1 className="font-bold text-5xl uppercase">Resumen</h1>
        </div>
        <HomeCard
          mainNumber={`${lastRoutes.length}`}
          secondaryNumber={`${totalCompletedRoutes}`}
          content="total-routes"
        />
        <HomeCard
          mainNumber={"6c"} // cambiar por max-grade
          secondaryNumber={"6b"} // cambiar por med-grade
          content="grade-info"
        />
        <h2 className="py-5 text-2xl mx-5">Últimos ascensos</h2>
        <div className="flex overflow-auto whitespace-nowrap no-scrollbar scroll-smooth">
          {/* TODO Aquí tendría que hacer un map de las últimas 7 rutas y devolver este
          componente */}
          <HomeLastAscents index={0} />
          <HomeLastAscents index={1} />
        </div>
      </div>
    </>
  );
};
