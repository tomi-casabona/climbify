import { useSelector } from "react-redux";
import { RouteCard } from "../components/RouteList/RouteCard";
import { Route } from "../types/dataTypes";
import type { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { filterByRouteName } from "../services/routeServices/filters/filterByRouteName";
import { orderByDate } from "../services/routeServices/orderBy/orderByDate";
import { orderByMinGrade } from "../services/routeServices/orderBy/orderByMinGrade";
import { orderBySector } from "../services/routeServices/orderBy/orderBySector";
import { orderByLocation } from "../services/routeServices/orderBy/orderByLocation";
import { orderBySchool } from "../services/routeServices/orderBy/orderBySchool";
import { orderByNameAsc } from "../services/routeServices/orderBy/orderByName";
import { orderByMaxGrade } from "../services/routeServices/orderBy/orderByMaxGrade";

export const RouteList = () => {
  const showModal = () => {
    const modalElement = document.getElementById("my_modal_1");
    if (modalElement instanceof HTMLDialogElement) {
      modalElement.showModal();
    }
  };
  const routes: Route[] | null = useSelector(
    (state: RootState) => state.routes.data
  );
  useEffect(() => {
    if (routes) {
      setFilteredRoutes(routes); // Inicializa filteredRoutes con routes cuando se carguen los datos
    }
  }, [routes]);
  const [query, setQuery] = useState("");
  const [filteredRoutes, setFilteredRoutes] = useState<Route[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(
    "recentDate"
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (routes) {
      const filtered = filterByRouteName(routes, newQuery);
      setFilteredRoutes(filtered);
    }
  };

  const handleCheckboxChange = (order: string) => {
    setSelectedOrder(order === selectedOrder ? null : order);
  };
  const applySorting = () => {
    if (selectedOrder) {
      switch (selectedOrder) {
        case "recentDate":
          setFilteredRoutes(orderByDate(filteredRoutes));
          break;
        case "name":
          setFilteredRoutes(orderByNameAsc(filteredRoutes));
          break;
        case "levelDescendent":
          setFilteredRoutes(orderByMaxGrade(filteredRoutes));
          break;
        case "levelAscendent":
          setFilteredRoutes(orderByMinGrade(filteredRoutes));
          break;
        case "sectorName":
          setFilteredRoutes(orderBySector(filteredRoutes));
          break;
        case "locationName":
          setFilteredRoutes(orderByLocation(filteredRoutes));
          break;
        case "schoolName":
          setFilteredRoutes(orderBySchool(filteredRoutes));
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="py-5 my-5 flex flex-col h-screen">
      <h1 className="p-5 uppercase font-bold text-5xl">Tus vías</h1>
      <div className="flex justify-around items-center gap-3 w-11/12 mx-auto pb-3 border-b border-neutral">
        <input
          type="text"
          placeholder="Buscar"
          value={query}
          className="input w-10/12 mx-auto rounded-full bg-neutral-content text-base-100"
          onChange={handleInputChange}
        ></input>
        <button className="btn rounded-full" onClick={showModal}>
          Order By{" "}
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg pb-4">
              Pick your preferred order !!
            </h3>
            <div className="flex justify-between py-2">
              Order by recent date
              <input
                type="checkbox"
                className="toggle toggle-error"
                checked={selectedOrder === "recentDate"}
                onChange={() => handleCheckboxChange("recentDate")}
              />
            </div>
            <div className="flex justify-between py-2">
              Order by Name
              <input
                type="checkbox"
                className="toggle toggle-error"
                checked={selectedOrder === "name"}
                onChange={() => handleCheckboxChange("name")}
              />
            </div>
            <div className="flex justify-between py-2">
              Order by level descendent
              <input
                type="checkbox"
                className="toggle toggle-error"
                checked={selectedOrder === "levelDescendent"}
                onChange={() => handleCheckboxChange("levelDescendent")}
              />
            </div>
            <div className="flex justify-between py-2">
              Order by level ascendent
              <input
                type="checkbox"
                className="toggle toggle-error"
                checked={selectedOrder === "levelAscendent"}
                onChange={() => handleCheckboxChange("levelAscendent")}
              />
            </div>
            <div className="flex justify-between py-2">
              group by sector name
              <input
                type="checkbox"
                className="toggle toggle-error"
                checked={selectedOrder === "sectorName"}
                onChange={() => handleCheckboxChange("sectorName")}
              />
            </div>
            <div className="flex justify-between py-2">
              group by location name
              <input
                type="checkbox"
                className="toggle toggle-error"
                checked={selectedOrder === "locationName"}
                onChange={() => handleCheckboxChange("locationName")}
              />
            </div>
            <div className="flex justify-between py-2">
              group by school name
              <input
                type="checkbox"
                className="toggle toggle-error"
                checked={selectedOrder === "schoolName"}
                onChange={() => handleCheckboxChange("schoolName")}
              />
            </div>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn" onClick={applySorting}>
                  Apply
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className="flex flex-col overflow-y-auto whitespace-nowrap no-scrollbar scroll-smooth">
        {filteredRoutes?.map((route, index) => {
          return <RouteCard key={index} route={route} />;
        })}
        <div className="p-14 w-full bg-base-100"></div>
      </div>
      <div className="fixed bottom-0 w-full">
        <div className="bg-gradient-to-t from-base-100 to-transparent w-full p-4"></div>
        <div className="bg-base-100 w-full p-16"></div>
      </div>
    </div>
  );
};
