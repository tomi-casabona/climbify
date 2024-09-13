import { useNavigate } from "react-router-dom";
import { Route } from "../../types/dataTypes";
import { ScaleContextType } from "../../types/gradeType";
import { ScaleContext } from "../../context/gradeContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const RouteCard = ({ routeIndex }: { routeIndex: number }) => {
    const routes: Route[] | null = useSelector((state: RootState) => state.routes.data);
    const navigate = useNavigate();
    const { scale } = useContext(ScaleContext) as ScaleContextType;

    let routeName = "No hay vías.";
    let currentRoute: Route | undefined;

    try {
        if (routes && routes.length > 0 && routeIndex >= 0 && routeIndex < routes.length) {
            currentRoute = routes[routeIndex];
            if (!currentRoute || !currentRoute.routeName) {
                throw new Error("Invalid route or route name");
            }

            routeName = currentRoute.routeName.length > 15
                ? currentRoute.routeName.substring(0, 15) + "..."
                : currentRoute.routeName;
        }
    } catch (error) {
        console.error("Error processing route:", error);
        routeName = "Error al obtener la vía.";
    }

    // Verificación adicional antes de acceder a currentRoute
    if (currentRoute) {
        return (
            <div
                className="flex justify-between items-center p-4 bg-custom-white rounded-2xl cursor-pointer"
                onClick={() => navigate(`route/${currentRoute.routeId}`)}>
                <div className="text-primary px-2 font-bold text-xl">
                    {scale.grades[currentRoute.routeGrade]}
                </div>
                <div className="uppercase px-2 font-bold text-xl">{routeName}</div>
                {currentRoute.completed ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 0 512 512"
                        className="mx-2">
                        <path
                            fill="#46bb3c"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 0 512 512"
                        className="mx-2">
                        <path
                            fill="#bb3c43"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        />
                    </svg>
                )}
            </div>
        );
    } else if (routes && routes.length > 0) {
        // routes existe y tiene elementos, pero routeIndex es inválido o routeName está ausente
        return <div className="p-4 font-bold">{routeName}</div>;
    } else {
        // routes no existe o está vacío
        return <div className="p-4 font-bold">No hay ninguna vía en este sector.</div>;
    }
};