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
			<div className="modal-box dark:bg-[url('/public/backgroundImages/bg-climber-dark.png')] bg-right-top bg-no-repeat bg-[length:650px_auto]">
				<form method="dialog">
					{/* if there is a button in form, it will close the modal */}
					<button className="btn btn-ghost absolute right-2 top-2">✕</button>
				</form>{" "}
				<h3 className="font-bold text-lg pb-4">Ordenar por...</h3>
				<div className="flex justify-between py-2">
					Más reciente
					<input
						type="checkbox"
						className="toggle toggle-secondary"
						checked={selectedOrder === "recentDate"}
						onChange={() => handleCheckboxChange("recentDate")}
					/>
				</div>
				<div className="flex justify-between py-2">
					Nombre
					<input
						type="checkbox"
						className="toggle toggle-secondary"
						checked={selectedOrder === "name"}
						onChange={() => handleCheckboxChange("name")}
					/>
				</div>
				<div className="flex justify-between py-2">
					Nivel descendente
					<input
						type="checkbox"
						className="toggle toggle-secondary"
						checked={selectedOrder === "levelDescendent"}
						onChange={() => handleCheckboxChange("levelDescendent")}
					/>
				</div>
				<div className="flex justify-between py-2">
					Nivel ascendente
					<input
						type="checkbox"
						className="toggle toggle-secondary"
						checked={selectedOrder === "levelAscendent"}
						onChange={() => handleCheckboxChange("levelAscendent")}
					/>
				</div>
				<div className="flex justify-between py-2">
					Agrupar por sector
					<input
						type="checkbox"
						className="toggle toggle-secondary"
						checked={selectedOrder === "sectorName"}
						onChange={() => handleCheckboxChange("sectorName")}
					/>
				</div>
				<div className="flex justify-between py-2">
					Agrupar por ubicación
					<input
						type="checkbox"
						className="toggle toggle-secondary"
						checked={selectedOrder === "locationName"}
						onChange={() => handleCheckboxChange("locationName")}
					/>
				</div>
				<div className="flex justify-between py-2">
					Agrupar por escuela
					<input
						type="checkbox"
						className="toggle toggle-secondary"
						checked={selectedOrder === "schoolName"}
						onChange={() => handleCheckboxChange("schoolName")}
					/>
				</div>
				<div className="modal-action">
					<form method="dialog">
						<button className="btn btn-secondary" onClick={handleFilterClick}>
							Aceptar
						</button>
					</form>
				</div>
			</div>
		</dialog>
	);
};
