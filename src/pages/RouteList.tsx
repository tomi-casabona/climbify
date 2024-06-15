import { useSelector } from "react-redux";
import { RouteCard } from "../components/RouteList/RouteCard";
import { Route } from "../types/dataTypes";
import type { RootState } from "../redux/store";
import { useState } from "react";
import { filterByRouteName } from "../services/filters/filterByRouteName";

export const RouteList = () => {
  // const showModal = () => {
  //   const modalElement = document.getElementById("my_modal_1");
  //   if (modalElement instanceof HTMLDialogElement) {
  //     modalElement.showModal();
  //   }
  // };
  const routes: Route[] | null = useSelector(
    (state: RootState) => state.routes.data
  );
  const [query, setQuery] = useState("");
  const [filteredRoutes, setFilteredRoutes] = useState<Route[] | null>(routes);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (routes) {
      const filtered = filterByRouteName(routes, newQuery);
      setFilteredRoutes(filtered);
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
        {/* <button className="btn rounded-full" onClick={handleInputClick}>
          Filter{" "}
        </button> */}
      </div>
      {/* <div className="flex justify-around items-center gap-3 w-11/12 mx-auto pb-3 border-b border-neutral">
        <input
          type="text"
          placeholder="Buscar"
          className="input w-10/12 mx-auto rounded-full bg-neutral-content text-base-100"
        ></input>
        <button className="btn rounded-full" onClick={showModal}>
          Filter{" "}
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog"> */}
      {/* if there is a button in form, it will close the modal */}
      {/* <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div> */}
      {/* Map de routes */}
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
