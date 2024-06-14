import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import useAuth from "../hooks/useAuth";

export const Navbar: React.FC = () => {
	const navigate = useNavigate();
	const isAuthenticated = useAuth();

	const handleSignIn = () => navigate("/signin");

	const handleLogin = () => navigate("/");

	const handleLogout = async () => {
		try {
			await signOut(auth);
			navigate("/home");
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	return (
		<nav className="bg-gray-800 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div>
					<button
						onClick={() => navigate("/home")}
						className="text-white text-xl font-bold"
					>
						Home
					</button>
				</div>
				<div className="flex space-x-4">
					{!isAuthenticated ? (
						<>
							<button
								onClick={handleSignIn}
								className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
							>
								Sign In
							</button>
							<button
								onClick={handleLogin}
								className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600"
							>
								Login
							</button>
						</>
					) : (
						<>
							<button
								onClick={() => navigate("/formulario")}
								className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
							>
								New Route
							</button>

							<button
								onClick={handleLogout}
								className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
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
