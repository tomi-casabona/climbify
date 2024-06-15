import { Route } from "../../types/dataTypes";

export const RouteCard = ({ route }: { route: Route }) => {
  const routename =
    route.routeName.length > 10
      ? route.routeName.substring(0, 10) + " ..."
      : route.routeName;
  return (
    <div className="mx-5 active:scale-105 duration-200 my-2 p-[1px] bg-gradient-to-b opacity from-neutral-content to-base-100 rounded-full">
      <div className="p-5 bg-base-100 rounded-full flex justify-between items-center">
        <div>
          <h4 className="text-xl uppercase font-bold">{routename}</h4>
          <p className="text-sm font-extralight capitalize">
            {route.schoolIndex}, {route.locationIndex}
          </p>
        </div>
        <div className="text-3xl px-5 font-light text-primary text-end">
          <h4 className="text-xl">{route.routeGrade}</h4>
          <p className="text-sm font-extralight">14/06/24</p>
          {/* Cuando el attempt sea completed, se pone new Date() aqui */}
        </div>
      </div>
    </div>
  );
};
