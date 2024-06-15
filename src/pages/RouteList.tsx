import { RouteCard } from "../components/RouteList/RouteCard";
import { Route } from "../types/dataTypes";

export const RouteList = () => {
  const showModal = () => {
    const modalElement = document.getElementById("my_modal_1");
    if (modalElement instanceof HTMLDialogElement) {
      modalElement.showModal();
    }
  };

  const routes: Route[] = [
    {
      routeId: "abcde-fghij-klmno-pqrst-uvwxy",
      routeName: "Route 1",
      routeGrade: 5,
      routeHeight: 20,
      routeAttempts: [],
      completed: true,
      sectorIndex: 0,
      schoolIndex: 1,
      locationIndex: 2,
    },
    {
      routeId: "12345-67890-abcde-fghij-klmno",
      routeName: "Route 2",
      routeGrade: 6,
      routeScore: 8,
      routeComments: ["Great route!"],
      routeHeight: 25,
      routeAttempts: [],
      completed: false,
      sectorIndex: 1,
      schoolIndex: 2,
      locationIndex: 3,
    },
    {
      routeId: "qwerty-asdfg-zxcvb-12345-67890",
      routeName: "Route 3",
      routeGrade: 4,
      routeHeight: 18,
      routeAttempts: [],
      completed: true,
      sectorIndex: 2,
      schoolIndex: 3,
      locationIndex: 4,
    },
    {
      routeId: "poiuy-trewq-mnbvc-09876-54321",
      routeName: "Route 4",
      routeGrade: 7,
      routeScore: 7,
      routeComments: ["Challenging climb"],
      routeHeight: 22,
      routeAttempts: [],
      completed: false,
      sectorIndex: 3,
      schoolIndex: 4,
      locationIndex: 5,
    },
    {
      routeId: "abcdef-ghijkl-mnopq-rstuv-wxyz1",
      routeName: "Route 5",
      routeGrade: 5,
      routeHeight: 20,
      routeAttempts: [],
      completed: true,
      sectorIndex: 4,
      schoolIndex: 5,
      locationIndex: 6,
    },
    {
      routeId: "54321-09876-vbncm-wqert-yuiop",
      routeName: "Route 6",
      routeGrade: 6,
      routeScore: 9,
      routeComments: ["Nice view from the top"],
      routeHeight: 27,
      routeAttempts: [],
      completed: false,
      sectorIndex: 5,
      schoolIndex: 6,
      locationIndex: 7,
    },
    {
      routeId: "zxcvb-qwerty-09876-54321-asdfg",
      routeName: "Route 7",
      routeGrade: 3,
      routeHeight: 15,
      routeAttempts: [],
      completed: true,
      sectorIndex: 6,
      schoolIndex: 7,
      locationIndex: 8,
    },
    {
      routeId: "plmko-njiuh-bhytg-vfred-cdexs",
      routeName: "Route 8",
      routeGrade: 8,
      routeScore: 10,
      routeComments: ["Perfect climb"],
      routeHeight: 30,
      routeAttempts: [],
      completed: false,
      sectorIndex: 7,
      schoolIndex: 8,
      locationIndex: 9,
    },
    {
      routeId: "lkjhg-fdsaq-qwery-vcxzb-mnbui",
      routeName: "Route 9",
      routeGrade: 4,
      routeHeight: 19,
      routeAttempts: [],
      completed: true,
      sectorIndex: 8,
      schoolIndex: 9,
      locationIndex: 0,
    },
    {
      routeId: "ytrew-poiuy-qazxs-edcrf-vtgbn",
      routeName: "Route 10",
      routeGrade: 7,
      routeScore: 8,
      routeComments: ["Difficult start, smooth finish"],
      routeHeight: 24,
      routeAttempts: [],
      completed: false,
      sectorIndex: 9,
      schoolIndex: 0,
      locationIndex: 1,
    },
  ];
  return (
    <div className="py-5 my-5 flex flex-col h-screen">
      <h1 className="p-5 uppercase font-bold text-5xl">Tus vías</h1>
      <div className="flex justify-around items-center gap-3 w-11/12 mx-auto pb-3 border-b border-neutral">
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
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      {/* Map de routes */}
      <div className="flex flex-col overflow-y-auto whitespace-nowrap no-scrollbar scroll-smooth">
        {routes.map((route) => {
          return <RouteCard route={route} />;
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
