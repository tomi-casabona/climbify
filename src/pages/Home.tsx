import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { calculateCompletedRoutes } from "../services/calculateCompletedRoutes";
import type { Route } from "../types/dataTypes";
import { getMaxCompletedGrade } from "../services/getMaxCompletedGrade";
import { calculateMidGrade } from "../services/calculateMidGrade";
import { calculateTotalHeight } from "../services/calculateTotalHeight";
import { orderByMaxGrade } from "../services/orderBy/orderByMaxGrade";
import { orderByMinGrade } from "../services/orderBy/orderByMinGrade";
import { orderByDate } from "../services/orderBy/orderByDate";
import { orderBySector } from "../services/orderBy/orderBySector";

export const Home: React.FC = () => {
  const usuario = useSelector((state: RootState) => state.user);
  const routesFirebase: Route[] = useSelector(
    (state: RootState) => state.routes.data
  );

  const totalCompletedRoutes: number = calculateCompletedRoutes(routesFirebase);

  /// Rutas de prueba con fechas distintas
  const routesPrueba: Route[] = [
    {
      completed: true,
      locationIndex: 0,
      routeAttempts: [
        {
          id: "4ef5f79a-0130-4908-b398-e29f6e97d07d",
          date: new Date("2022-06-01"),
          completed: true,
        },
        {
          id: "4ef5f79a-0130-4908-b398-e29f6e97d07d",
          date: new Date("2022-06-12"),
          completed: true,
        },
      ],
      routeComments: [],
      routeGrade: 1,
      routeHeight: 22,
      routeId: "4ef5f79a-0130-4908-b25398-e29f6e97d07d",
      routeName: "2022",
      schoolIndex: 0,
      sectorIndex: 5,
    },
    {
      completed: true,
      locationIndex: 0,
      routeAttempts: [
        {
          id: "4ef5f79a-0130-4908-b398-e29f6e97d07d",
          date: new Date("2025-06-10"),
          completed: true,
        },
      ],
      routeComments: [],
      routeGrade: 32,
      routeHeight: 22,
      routeId: "4ef5f79a-0130-4908-b398-e29f6e97d07d",
      routeName: "2025",
      schoolIndex: 0,
      sectorIndex: 2,
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
      routeGrade: 62,
      routeHeight: 22,
      routeId: "4ef5f79a-0130-4908-b398-e29f6e97d07d",
      routeName: "tatoine",
      schoolIndex: 0,
      sectorIndex: 3,
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
      routeName: "ta",
      schoolIndex: 0,
      sectorIndex: 1,
    },
  ];
  console.log(routesPrueba)
  console.log(orderBySector(routesPrueba));
  return (
    <>
      <h2>Hello {usuario ? usuario.info?.displayName : "Guest"}</h2>
      <h2>Hello {usuario ? usuario.info?.email : "Guest"}</h2>
      <img src={usuario.info?.photoURL} alt="" />
      <p>QUE CHICO MAS GUAPETON !!</p>
      <p>Completed Routes : {totalCompletedRoutes}</p>
      <p> ruta maximo grado : {getMaxCompletedGrade(routesPrueba)}</p>
      <p> ruta media: {calculateMidGrade(routesPrueba)}</p>
      <p> altura total {calculateTotalHeight(routesPrueba)}m</p>
    </>
  );
};
