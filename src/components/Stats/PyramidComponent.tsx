export const PyramidComponent = () => {
	return (
		<div className="flex-1 w-1/2 rounded-[2rem] bg-base-content p-5">
			<h4 className="font-bold uppercase flex items-center gap-3 text-secondary mb-3">
				Pirámide del encadene
			</h4>

			<p className="text-secondary font-bold text-2xl">6b</p>
			<div className="h-6 bg-secondary w-full rounded-full mb-3 relative">
				<div className="h-6 bg-primary duration-500 w-1/2 rounded-full">
					<p className="absolute w-full text-center font-bold">1/2</p>
				</div>
			</div>
			<p className="text-secondary font-bold text-2xl">6a+</p>
			<div className="h-6 bg-secondary w-full rounded-full mb-3 relative">
				<div className="h-6 bg-primary duration-500 w-full rounded-full">
					<p className="absolute w-full text-center font-bold">3/3</p>
				</div>
			</div>
			<p className="text-secondary font-bold text-2xl">6a</p>
			<div className="h-6 bg-secondary w-full rounded-full mb-3 relative">
				<div className="h-6 bg-primary duration-500 w-3/4 rounded-full">
					<p className="absolute w-full text-center font-bold">3/4</p>
				</div>
			</div>
			<p className="text-secondary font-bold text-2xl">5c</p>
			<div className="h-6 bg-secondary w-full rounded-full mb-3 relative">
				<div className="h-6 bg-primary duration-500 w-1/5 rounded-full">
					<p className="absolute w-full text-center font-bold">1/5</p>
				</div>
			</div>
		</div>
	);
};
