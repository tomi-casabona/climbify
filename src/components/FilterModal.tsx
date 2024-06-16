import React from "react";

interface FilterModalProps {
  selectedOrder: string;
  handleCheckboxChange: (filterText: string) => void;
  handleFilterClick: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  selectedOrder,
  handleCheckboxChange,
  handleFilterClick,
}) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box dark:bg-[url('/public/backgroundImages/bg-climber-dark.png')] bg-right-top bg-no-repeat bg-[length:700px_700px]  ">
        <h3 className="font-bold text-lg pb-4">Pick your preferred order !!</h3>
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
            <button className="btn" onClick={handleFilterClick}>
              Apply
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
