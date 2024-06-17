import React from "react";

export const TotalHeightComponent = ({ totalHeight }: { totalHeight: number }) => {
	return (
		<>
			<div className="px-4 py-8 w-full bg-secondary rounded-[2rem] flex flex-col justify-center items-center">
				<h4 className="font-bold uppercase flex items-center gap-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20"
						width="15"
						viewBox="0 0 384 512"
						fill="currentColor">
						<path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
					</svg>
					Escalado
				</h4>
				<p className="font-bold text-5xl text-primary">{totalHeight}m</p>
			</div>
			<div className="w-full bg-secondary rounded-[2rem]"></div>
		</>
	);
};
