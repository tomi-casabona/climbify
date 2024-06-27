import { showModal } from "../../services/routeServices/showModal";

type Props = {
	comment: string;
	index: number;
	deleteComment: (index: number) => void;
};

export const CommentsComponent: React.FC<Props> = ({ comment, deleteComment, index }) => {
	const handleDeleteComment = () => {
		deleteComment(index);
	};

	return (
		<div className="flex flex-row justify-between p-2">
			{comment}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="14"
				width="14"
				viewBox="0 0 448 512"
				fill="currentColor"
				onClick={() => showModal("my_modal_5")}>
				<path
					d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
					stroke="none"
				/>
			</svg>

			<dialog id="my_modal_5" className="modal">
				<div className="modal-box w-2/3">
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
						<h3 className="font-bold text-lg text-center text-slate-200">
							Seguro que quieres eliminar este comentario?
						</h3>
						<div className="flex justify-center gap-5 mt-5">
							<button onClick={handleDeleteComment} className="btn btn-accent btn-circle">
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
