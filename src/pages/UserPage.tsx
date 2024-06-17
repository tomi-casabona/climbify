import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ScaleContext } from "../context/gradeContext";
import { ScaleContextType } from "../types/gradeType";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const UserPage = () => {
	const navigate = useNavigate();
	const { scale, scaleIndex, selectScale } = useContext(ScaleContext) as ScaleContextType;
	const user = useSelector((state: RootState) => state.user);

	const handleLogout = async () => {
		try {
			await signOut(auth);
			navigate("/login");
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};
	return (
		<div className="m-5 p-5">
			<div className="flex justify-center items-center">
				<img
					src={
						user.info?.photoURL
							? user.info.photoURL
							: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
					}
					className="w-52 h-52 m-auto rounded-full border-4 border-base-content"
				/>
			</div>
			<h1 className=" text-5xl my-5 text-center">Hola, {user.info?.displayName}!</h1>
			<div className="flex flex-col justify-center items-center">
				<div className="dropdown my-5">
					<div tabIndex={0} className="m-1 btn btn-primary btn-outline active:bg-base-content">
						Tipo de escala
					</div>
					<ul
						tabIndex={0}
						className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
						<li>
							<a className={`${scaleIndex === 0 && "bg-base-200"}`} onClick={() => selectScale(0)}>
								French
							</a>
						</li>
						<li>
							<a className={`${scaleIndex === 1 && "bg-base-200"}`} onClick={() => selectScale(1)}>
								YDS (USA)
							</a>
						</li>
						<li>
							<a className={`${scaleIndex === 2 && "bg-base-200"}`} onClick={() => selectScale(2)}>
								UIAA (Europa)
							</a>
						</li>
						<li>
							<a className={`${scaleIndex === 3 && "bg-base-200"}`} onClick={() => selectScale(3)}>
								British (E)
							</a>
						</li>
						<li>
							<a className={`${scaleIndex === 4 && "bg-base-200"}`} onClick={() => selectScale(4)}>
								AUS
							</a>
						</li>
					</ul>
				</div>
				<div className="my-5 text-xl font-bold">Escala actual: {scale.scale}</div>
				<div className="my-5 text-xl">
					Ejemplo: {scale.grades[4]}, {scale.grades[10]}, {scale.grades[20]}...
				</div>
				<div>
					<button onClick={handleLogout} className="btn-warning btn text-xl">
						Logout
					</button>
				</div>
			</div>
		</div>
	);
};
