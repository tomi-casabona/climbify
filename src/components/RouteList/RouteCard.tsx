import { useNavigate } from "react-router-dom";
import { Route } from "../../types/dataTypes";
import { capitalizeFirstLetterOnly } from "../../services/capitalizeFirstLetter";

export const RouteCard = ({
  route,
  school,
  sector,
}: {
  route: Route;
  school: string;
  sector: string;
}) => {
  const navigate = useNavigate();

  // Truncate route name if it exceeds 14 characters
  const routename =
    route.routeName.length > 12
      ? route.routeName.substring(0, 12) + " ..."
      : route.routeName;
  const description =
    capitalizeFirstLetterOnly(sector) +
    ", " +
    capitalizeFirstLetterOnly(school);
  const finalDescription =
    description.length > 22
      ? description.substring(0, 22) + "..."
      : description;

  return (
    <div
      className="mx-5 active:scale-105 duration-200 my-2 p-[1px] bg-gradient-to-b opacity from-neutral-content to-base-100 rounded-full cursor-pointer"
      onClick={() => navigate(`route/${route.routeId}`)}
    >
      <div className="p-5 bg-base-100 rounded-full flex justify-between items-center">
        <div>
          <h4 className="text-2xl uppercase font-bold">{routename}</h4>
          <p className="text-lg font-extralight capitalize">
            {finalDescription}
          </p>
        </div>
        <div className="text-3xl px-5 font-light text-primary text-end">
          <h4 className="text-2xl">{route.routeGrade}</h4>
          {/* Placeholder for completion date */}
          <p className="text-lg font-extralight">14/06/24</p>
          {/* Replace with actual completion date logic */}
        </div>
      </div>
    </div>
  );
};
