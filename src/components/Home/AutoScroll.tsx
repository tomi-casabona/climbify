import { useRef } from "react";
import { Route } from "../../types/dataTypes";
import { HomeLastAscents } from "./HomeLastAscents";
import arrowLeft from "../../assets/icons/arrowLeft.png";
import arrowRight from "../../assets/icons/arrowRight.png";

export function AutoScroll({
	totalRoutes,
	routesPrueba,
}: {
	totalRoutes: Route[];
	routesPrueba: Route[];
}) {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scrollLeft = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollLeft -= 200; // Desplaza a la izquierda 200px
		}
	};

	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollLeft += 200; // Desplaza a la derecha 200px
		}
	};

	return (
		<div className="relative w-full flex items-center pb-11 ">
			{/* Botón para desplazar a la izquierda */}
			<button
				className="absolute left-0 z-10 p-0 rounded-full hidden md:block max-w-[75px]"
				onClick={scrollLeft}>
				<img src={arrowLeft}></img>
			</button>

			{/* Contenedor desplazable */}
			<div
				className="h-[35%] w-10/12 flex overflow-auto whitespace-nowrap no-scrollbar scroll-smooth mx-auto"
				ref={scrollRef}>
				{totalRoutes.length === 0 &&
					routesPrueba.map((route, index) => {
						if (index < 7) return <HomeLastAscents key={index} route={route} index={index} />;
					})}
				{totalRoutes.map((route, index) => {
					if (index < 7) return <HomeLastAscents key={index} route={route} index={index} />;
				})}
			</div>

			{/* Botón para desplazar a la derecha */}
			<button
				className="absolute right-0 z-10 p-0 hidden md:block max-w-[75px]"
				onClick={scrollRight}>
				<img src={arrowRight} alt="" />
			</button>
		</div>
	);
}
