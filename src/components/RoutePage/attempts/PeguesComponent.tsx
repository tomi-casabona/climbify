import { Attempt } from "../../../types/dataTypes";
import { showModal } from "../../../services/routeServices/showModal";
import { CompletedAttemptIcon } from "./CompletedAttemptIcon";
import { NotCompletedAttemptIcon } from "./NotCompletedAttemptIcon";
import { DeleteAttemptIcon } from "./DeleteAttemptIcon";

type Props = {
	attempt: Attempt;
	deleteAttempt: (id: string) => void;
};

export const PeguesComponent: React.FC<Props> = ({ attempt, deleteAttempt }) => {
	const formatDate = (isoString: string): string => {
		const date = new Date(isoString);
		const day = String(date.getDate()).padStart(2, "0");
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const year = String(date.getFullYear()).slice(-2);
		return `${day}/${month}/${year}`;
	};

	const handleDelete = () => {
		deleteAttempt(attempt.id);
	};

	return (
		<div className="flex justify-between items-center">
			<p>{formatDate(attempt.date)}</p>
			{attempt.completed ? <CompletedAttemptIcon /> : <NotCompletedAttemptIcon />}
			<DeleteAttemptIcon onClick={() => showModal("my_modal_4")} />
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
