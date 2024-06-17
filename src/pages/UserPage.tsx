import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";

export const UserPage = () => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await signOut(auth);
			navigate("/login");
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};
	return (
		<div>
			<button onClick={handleLogout} className="btn-warning btn text-xl">
				Logout
			</button>
		</div>
	);
};
