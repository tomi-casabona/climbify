import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase-config";
import { User } from "firebase/auth";

export const Home: React.FC = () => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setUser(user);
		});

		// Clean up the subscription on unmount
		return () => unsubscribe();
	}, []);

	return (
		<>
			<div className="p-5 text-white">
				<div className="p-5">
					<h3 className="">Hola {user ? user.displayName : "escalador"}!</h3>
					<h1 className="font-extrabold text-5xl uppercase">Resumen</h1>
				</div>
			</div>
		</>
	);
};
