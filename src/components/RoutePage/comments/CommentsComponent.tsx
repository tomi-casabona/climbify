import { showModal } from "../../../services/routeServices/showModal";
import { DeleteCommentIcon } from "./DeleteCommentIcon";

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
			<DeleteCommentIcon onClick={() => showModal("my_modal_5")} />

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
