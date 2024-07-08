import { useSelector } from "react-redux";
import { Location } from "../types/dataTypes";
import { RootState } from "../redux/store";
import { LocationAccordion } from "../components/RouteList/LocationAccordion";
import { showModal } from "../services/routeServices/showModal";

export const RouteList = () => {
	const locations: Location[] | null = useSelector((state: RootState) => state.locations.data);

	return (
		<div className="py-5 mb-5 flex flex-col h-screen px-2">
			<div className="flex justify-center items-center">
				<h1 className="p-5 uppercase font-bold text-3xl text-center">Tus vías</h1>
				<button
					className="btn btn-sm btn-circle btn-ghost"
					onClick={() => showModal("route-list-modal")}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</button>

				<dialog id="route-list-modal" className="modal">
					<div className="modal-box w-full bg-opacity-95">
						<form method="dialog">
							<button className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
							<h3 className="font-bold text-lg">¿Cómo se clasifican las vías?</h3>
							<p className="mt-4">
								Las vías de escalada se clasifican según su{" "}
								<span className="font-bold rounded bg-secondary-darker px-1 text-black uppercase">
									ubicación
								</span>{" "}
								(ciudado o país), su{" "}
								<span className="font-bold rounded bg-secondary px-1 text-black uppercase">
									escuela
								</span>{" "}
								(p.e. "Yosemite") y su{" "}
								<span className="font-bold rounded bg-custom-brown px-1 text-black uppercase">
									sector
								</span>
								.
							</p>
							<p className="mt-4">
								Aquí encontrarás{" "}
								<span className="font-bold">todas las vías que has registrado</span>.
							</p>
							<p className="mt-4">
								Si has encadenado la vía verás un icono como este
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 0 512 512"
									className="mx-2 inline-block">
									<path
										fill="#46bb3c"
										d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
									/>
								</svg>
								al lado derecho de tu vía. Por el contrario, este icono
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 0 512 512"
									className="mx-2 inline-block">
									<path
										fill="#bb3c43"
										d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
									/>
								</svg>
								indicará que aún no las has encadenado.
							</p>
							<p className="my-4">Haz click a una vía para ver sus detalles y anotar tus pegues.</p>
							<p className="font-bold">¿A qué estás esperando? ¡A escalar!</p>
						</form>
					</div>
				</dialog>
			</div>

			<div className="flex flex-col overflow-auto whitespace-nowrap no-scrollbar scroll-smooth rounded-2xl">
				<div className="flex justify-start items-center">
					<div className="h-4 w-8 rounded-full bg-secondary-darker"></div>
					<h3 className="px-1 font-bold text-xl">Ubicación</h3>
				</div>
				<div className="flex justify-start items-center">
					<div className="h-4 w-8 rounded-full bg-secondary"></div>
					<h3 className="px-1 font-bold text-xl">Escuela</h3>
				</div>
				<div className="flex justify-start items-center">
					<div className="h-4 w-8 rounded-full bg-custom-brown"></div>
					<h3 className="px-1 font-bold text-xl">Sector</h3>
				</div>
				{locations?.map((location, index) => {
					return <LocationAccordion key={index} location={location} index={index} />;
				})}
			</div>
			<div className="bg-transparent min-h-[64px] w-auto"></div>
		</div>
	);
};
