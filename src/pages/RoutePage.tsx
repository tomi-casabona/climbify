import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { Location, Route, School, Sector, type Attempt } from "../types/dataTypes";
import { PeguesComponent } from "../components/RoutePage/PeguesComponent";
import { capitalizeFirstLetterOnly } from "../services/capitalizeFirstLetter";
import { ScaleContextType } from "../types/gradeType";
import { ScaleContext } from "../context/gradeContext";
import { useContext } from "react";
import { updateRoutes } from "../redux/thunks/routesThunks";

export const RoutePage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const routes = useSelector((state: RootState) => state.routes.data) as Route[];
	const sectors = useSelector((state: RootState) => state.sectors.data) as Sector[];
	const schools = useSelector((state: RootState) => state.schools.data) as School[];
	const locations = useSelector((state: RootState) => state.locations.data) as Location[];
	const dispatch = useDispatch<AppDispatch>();
	const { scale } = useContext(ScaleContext) as ScaleContextType;

	const route = routes.find((route) => route.routeId === id) as Route;

	const sector = capitalizeFirstLetterOnly(sectors[route.sectorIndex].sectorName);
	const school = capitalizeFirstLetterOnly(schools[route.schoolIndex].schoolName);
	const location = capitalizeFirstLetterOnly(locations[route.locationIndex].locationName);

	const addPegue = () => {
		if (!route) return;

		const newAttempt: Attempt = {
			id: crypto.randomUUID(),
			date: new Date().toISOString(),
			completed: true,
		};

		const updatedRoute: Route = {
			...route,
			routeAttempts: [...route.routeAttempts, newAttempt],
		};
		
		console.log(updatedRoute);
		// Find the route by ID and update it
		const routeIndex = routes.findIndex((route) => route.routeId === id);
		const newRoutes = [...routes];
		if (routeIndex !== -1) {
			newRoutes[routeIndex] = {
				...newRoutes[routeIndex],
				routeAttempts: [...route.routeAttempts, newAttempt],
			};
		}

		dispatch(updateRoutes(newRoutes));
	};

	return (
		<div className="w-full h-screen absolute top-0 bg-base-100 flex flex-col flex-1 justify-center items-center">
			{/* Header */}
			<div className="w-full flex justify-between items-center px-3 py-5 pb-0 mt-5 mx-3">
				<button
					className="rounded-2xl text-2xl btn btn-outline h-12 w-12 p-0"
					onClick={() => navigate("/routes")}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20"
						width="20"
						viewBox="0 0 320 512"
						fill="currentColor">
						<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
					</svg>
				</button>
				<div className="text-center text-wrap">
					<h2 className="text-3xl font-bold">{route?.routeName}</h2>
				</div>
				<button
					className="rounded-2xl text-2xl btn btn-outline h-12 w-12 p-0"
					onClick={() => navigate("/editRoute", { state: { route } })}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20"
						width="20"
						viewBox="0 0 512 512"
						fill="currentColor">
						<path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
					</svg>
				</button>
			</div>
			<div className="flex flex-col justify-center items-center">
				<h3 className="font-bold">{sector}</h3>
				<p className="capitalize text-sm">
					{school}, {location}
				</p>
			</div>
			{/* Main */}
			<div className="w-11/12 h-2/5 bg-secondary mx-3 rounded-3xl my-3 p-3 flex gap-2 flex-1">
				{/* TODO Poner la imagen de route.routeImg */}
				<div className="w-1/2 h-full flex flex-col gap-2">
					<div
						className={`h-3/5 w-full bg-route-default bg-cover bg-left-bottom bg-opacity-10 rounded-3xl `}>
						{/* TODO Condicional de si hay imagen en route no se renderiza */}
						<div className="flex justify-center items-center bg-secondary bg-opacity-50 h-full">
							<h3 className="font-medium">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="32"
									width="36"
									viewBox="0 0 576 512"
									fill="currentColor">
									<path d="M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z" />
								</svg>
							</h3>
						</div>
					</div>
					<div className="bg-base-content w-full h-2/5 rounded-3xl flex flex-col justify-center items-center">
						<h4 className="text-7xl text-primary font-extrabold">
							{scale.grades[route.routeGrade]}
						</h4>
						<h5 className="text-2xl text-secondary font-bold">{route.routeHeight}m</h5>
					</div>
				</div>
				<div className="h-full w-1/2 flex flex-col bg-base-100 bg-opacity-10 rounded-3xl p-3 gap-4">
					<h3 className="font-bold text-2xl text-center text-base-100">Pegues</h3>
					<ul className="text-sm text-base-100 text-center flex-1 overflow-auto">
						{route.routeAttempts && route.routeAttempts.length === 0 ? (
							<li className="list-item">Aún no le has dado ningún pegue...</li>
						) : (
							route.routeAttempts?.map((attempt, index) => (
								<PeguesComponent attempt={attempt} key={index} />
							))
						)}
					</ul>
					<div className="flex justify-between items-center">
						<h3 className="text-base-100 font-bold text-2xl">Total:</h3>
						<h3 className="text-base-content font-bold text-4xl text-end">
							{route.routeAttempts ? route.routeAttempts.length : 0}
						</h3>
					</div>

					<div className="flex justify-center">
						<button className="btn btn-outline btn-circle" onClick={() => addPegue()}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								width="21"
								viewBox="0 0 448 512"
								fill="currentColor">
								<path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			{/* Comments */}
			<div className="w-11/12 bg-primary mx-3 rounded-3xl my-3 p-5 overflow-auto h-[30%]">
				<p className="font-bold">Comentarios:</p>
				<ul>
					{!route.routeComments ? (
						<li>No hay ningún comentario.</li>
					) : route.routeComments.length === 0 ? (
						<li>No hay ningún comentario.</li>
					) : (
						route.routeComments.map((comment) => {
							return <li>{comment}</li>;
						})
					)}
				</ul>
			</div>
		</div>
	);
};
