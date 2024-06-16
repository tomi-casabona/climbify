import type { Route } from "../../types/dataTypes";

export const HomeLastAscents = ({
  route,
  index,
}: {
  route: Route;
  index: number;
}) => {
  const routeName =
    route.routeName.length > 8
      ? route.routeName.substring(0, 8) + "..."
      : route.routeName;

  const esPar = index % 2 === 0 ? true : false;
  return (
    <div className="inline-block mx-1 h-60">
      <div
        className={`w-56 h-56 p-3 active:scale-105 duration-200 rounded-full ${esPar ? "bg-neutral-content" : "bg-neutral my-4"} flex flex-col justify-center items-center text-center object-center font-bold`}
      >
        <div className="h-2/5 flex items-end">
          <p
            className={`text-2xl uppercase text-wrap ${esPar ? "text-neutral" : "text-neutral-content"}`}
          >
            {routeName}
          </p>
        </div>
        <div className="h-3/5">
          <p className="text-7xl text-primary">{route.routeGrade}</p>
        </div>
      </div>
    </div>
  );
};
