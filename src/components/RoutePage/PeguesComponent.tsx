import { Attempt } from "../../types/dataTypes";
import { showModal } from "../../services/routeServices/showModal";

type Props = {
	attempt: Attempt;
	deleteAttempt: (id: string) => void;
};

export const PeguesComponent: React.FC<Props> = ({ attempt, deleteAttempt }) => {
	// Convertir el string ISO a objeto Date
	const date = new Date(attempt.date);

	// Obtener los componentes de la fecha (día, mes, año)
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = String(date.getFullYear()).slice(-2);

	const handleDelete = () => {
		deleteAttempt(attempt.id);
	};

	return (
		<div className="flex justify-between items-center">
			<p>
				{day}/{month}/{year}
			</p>
			<div className="flex gap-2">
				{attempt.completed ? (
					<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
						<path fill="#bb3c43" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
					</svg>
				) : (
					<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 380 512">
						<path
							fill="#bb3c43"
							d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
						/>
					</svg>
				)}

				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="14"
					width="14"
					viewBox="0 0 448 512"
					fill="currentColor"
					onClick={() => showModal("my_modal_4")}>
					<path
						d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
						stroke="none"
					/>
				</svg>
			</div>

			<dialog id="my_modal_4" className="modal">
				<div className="modal-box w-2/3">
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
						<h3 className="font-bold text-lg text-center text-slate-200">
							Seguro que quieres eliminar este pegue?
						</h3>
						<div className="flex justify-center gap-5 mt-5">
							<button onClick={handleDelete} className="btn btn-accent btn-circle">
								Sí
							</button>
							<button className="btn btn-secondary btn-circle">No</button>
						</div>
					</form>
				</div>
			</dialog>
		</div>
	);
};
