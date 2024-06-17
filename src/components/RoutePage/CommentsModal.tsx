import React from "react";

interface CommentsModalProps {
	comment: string;
	setComment: React.Dispatch<React.SetStateAction<string>>;
	saveComment: () => void;
	closeModal: () => void;
}

export const CommentsModal: React.FC<CommentsModalProps> = ({
	comment,
	setComment,
	saveComment,
	closeModal,
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setComment(e.target.value);
	};

	return (
		<dialog className="h-1/6 overflow-y-auto" open>
			<form
				method="dialog"
				onSubmit={(e) => {
					e.preventDefault();
					saveComment();
				}}>
				<input
					type="text"
					value={comment}
					onChange={handleChange}
					className="rounded p-2 border border-gray-300 focus:outline-none focus:border-primary"
				/>
				<div className="flex justify-end mt-4">
					<button type="button" onClick={closeModal} className="btn btn-outline ">
						Cancelar
					</button>
					<button type="submit" className="btn btn-primary btn-circle">
						Guardar comentario
					</button>
				</div>
			</form>
		</dialog>
	);
};
