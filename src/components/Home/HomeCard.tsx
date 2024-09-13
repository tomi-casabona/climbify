export const HomeCard = ({
	mainNumber,
	secondaryNumber,
	content,
}: {
	mainNumber: string;
	secondaryNumber: string;
	content: string;
}) => {
	let cardContent = { header: "", p: "" };
	if (content === "total-routes") {
		cardContent = { header: "Vías completadas", p: "Últimos siete días" };
	}
	if (content === "grade-info") {
		cardContent = { header: "Grado máximo", p: "Grado medio" };
	}
	return (
		<div className="active:scale-105 duration-200 my-5 p-[1px] bg-gradient-to-b opacity from-neutral-content to-base-100 rounded-full w-full md:w-1/3 md:h-24">
			<div className="p-5 bg-base-100 rounded-full flex justify-between items-center  md:h-24">
				<div>
					<h4 className="text-xl">{cardContent.header}</h4>
					<p className="text-sm font-extralight">
						{cardContent.p}:{" "}
						<span className="text-primary">
							{content === "total-routes" && "+"}
							{secondaryNumber}
						</span>
					</p>
				</div>
				<div className="text-3xl px-5 font-light text-primary">{mainNumber}</div>
			</div>
		</div>
	);
};
