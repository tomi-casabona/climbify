import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import useAuth from "../hooks/useAuth";

export const Navbar: React.FC = () => {
	const navigate = useNavigate();
	const isAuthenticated = useAuth();

	const handleLogout = async () => {
		try {
			await signOut(auth);
			navigate("/login");
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	return (
		<nav className="flex justify-center">
			<div className="bg-neutral p-4 fixed bottom-0 my-4 w-11/12 rounded-full flex justify-around items-center z-50">
				<div>
					<button
						onClick={() => navigate("/")}
						className="text-xl font-bold btn btn-secondary btn-circle"
					>
						H
					</button>
				</div>
				<div className="flex space-x-4">
					{!isAuthenticated ? (
						<>
							<button
								onClick={() => navigate("/signin")}
								className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
							>
								Sign In
							</button>
							<button
								onClick={() => navigate("/login")}
								className="btn-warning btn text-xl"
							>
								Login
							</button>
						</>
					) : (
						<>
							<button
								onClick={() => navigate("/newroute")}
								className="btn-secondary btn btn-circle text-xl"
							>
								+
							</button>
							<button
								onClick={() => navigate("/routes")}
								className="btn-secondary btn btn-circle text-xl"
							>
								V
							</button>

							<button
								onClick={handleLogout}
								className="btn-warning btn text-xl"
							>
								Logout
							</button>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};
