import { Attempt } from "../../types/dataTypes";

export const PeguesComponent = ({ attempt }: { attempt: Attempt }) => {
	const day = String(attempt.date.getDate()).padStart(2, "0");
	const month = String(attempt.date.getMonth() + 1).padStart(2, "0");
	const year = String(attempt.date.getFullYear()).slice(-2);

	return (
		<div className="flex justify-between items-center">
			<p>
				{day}/{month}/{year}
			</p>
			{attempt.completed ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="14"
					width="14"
					viewBox="0 0 512 512"
				>
					<path
						fill="#bb3c43"
						d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="14"
					width="10.5"
					viewBox="0 0 384 512"
				>
					<path
						fill="#bb3c43"
						d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
					/>
				</svg>
			)}
		</div>
	);
};
