import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<nav className="btm-nav z-50 transition-all duration-300">
			{/* Home btn */}
			<NavLink to={"/"}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 576 512"
					className={`h-8 w-8 ${currentPath === "/" ? "fill-primary" : "fill-base-content"}`}>
					<path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
				</svg>
			</NavLink>
			<NavLink to={"/routes"}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className={`h-8 w-8 ${currentPath === "/routes" ? "fill-primary" : "fill-base-content"}`}
					viewBox="0 0 512 512">
					<path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
				</svg>
			</NavLink>
			<NavLink to={"/newroute"}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-full fill-base-content pb-2"
					viewBox="0 0 512 512">
					<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
				</svg>
			</NavLink>
			<NavLink to={"/stats"}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					className={`h-8 w-8 ${currentPath === "/stats" ? "fill-primary" : "fill-base-content"}`}>
					<path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
				</svg>
			</NavLink>
			<NavLink to={"/user"}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					className={`h-8 w-8 ${currentPath === "/user" ? "fill-primary" : "fill-base-content"}`}>
					<path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
				</svg>
			</NavLink>
		</nav>
	);
};
