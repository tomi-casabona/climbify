import { Route } from "../../types/dataTypes";

export const CompletedRoutesGraph = ({
	totalRoutes,
	routes,
}: {
	totalRoutes: number;
	routes: Route[];
}) => {
	const calculatePercentage = () => {
		return (totalRoutes * 100) / routes.length;
	};

	return (
		<div className="px-4 py-8 w-full bg-secondary rounded-[2rem] flex flex-col justify-center items-center">
			<h4 className="font-bold uppercase flex items-center gap-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					width="24"
					viewBox="0 0 512 512"
					fill="currentColor">
					<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
				</svg>
				Completadas
			</h4>

			<div
				className="radial-progress mt-4 text-base-content bg-primary"
				style={
					{
						"--value": `${calculatePercentage()}`,
						"--size": "8rem",
						"--thickness": "2rem",
					} as React.CSSProperties
				}
				role="progressbar">
				{calculatePercentage()}%
			</div>
		</div>
	);
};
