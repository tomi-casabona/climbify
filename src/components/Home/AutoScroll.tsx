import { useRef, useEffect } from "react";
import { Route } from "../../types/dataTypes";
import { HomeLastAscents } from "./HomeLastAscents";

export function AutoScroll({
	totalRoutes,
	routesPrueba,
}: {
	totalRoutes: Route[];
	routesPrueba: Route[];
}) {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollContainer = scrollRef.current;
		let mouseX = 0;
		let scrollInterval: number | null = null;

		const handleMouseMove = (e: MouseEvent) => {
			if (!scrollContainer) return;

			const rect = scrollContainer.getBoundingClientRect();
			mouseX = e.clientX - rect.left; // Posición del mouse dentro del contenedor

			// Determina el umbral cercano a los bordes
			const threshold = 100; // 100px de margen desde los bordes

			// Si el mouse está cerca del borde izquierdo
			if (mouseX < threshold) {
				if (!scrollInterval) {
					scrollInterval = window.setInterval(() => {
						scrollContainer.scrollLeft -= 10; // Velocidad de desplazamiento hacia la izquierda
					}, 10);
				}
			}
			// Si el mouse está cerca del borde derecho
			else if (mouseX > rect.width - threshold) {
				if (!scrollInterval) {
					scrollInterval = window.setInterval(() => {
						scrollContainer.scrollLeft += 70; // Velocidad de desplazamiento hacia la derecha
					}, 10);
				}
			}
			// Si el mouse no está cerca de ningún borde
			else {
				if (scrollInterval) {
					clearInterval(scrollInterval);
					scrollInterval = null;
				}
			}
		};

		const handleMouseLeave = () => {
			if (scrollInterval) {
				clearInterval(scrollInterval);
				scrollInterval = null;
			}
		};

		scrollContainer?.addEventListener("mousemove", handleMouseMove);
		scrollContainer?.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			scrollContainer?.removeEventListener("mousemove", handleMouseMove);
			scrollContainer?.removeEventListener("mouseleave", handleMouseLeave);
			if (scrollInterval) {
				clearInterval(scrollInterval);
			}
		};
	}, []);

	return (
		<div
			className="h-[35%] w-10/12 flex overflow-auto whitespace-nowrap no-scrollbar scroll-smooth justify-between mx-auto"
			style={{
				maskImage:
					"linear-gradient(to right, transparent 0px, black 100px, black calc(100% - 100px), transparent 100%)",
				WebkitMaskImage:
					"linear-gradient(to right, transparent 0px, black 100px, black calc(100% - 100px), transparent 100%)",
			}}
			ref={scrollRef}>
			{totalRoutes.length === 0 &&
				routesPrueba.map((route, index) => {
					if (index < 7) return <HomeLastAscents key={index} route={route} index={index} />;
				})}
			{totalRoutes.map((route, index) => {
				if (index < 7) return <HomeLastAscents key={index} route={route} index={index} />;
			})}
		</div>
	);
}
