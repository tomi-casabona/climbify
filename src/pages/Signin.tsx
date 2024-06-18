import React, { useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	FacebookAuthProvider,
	AuthError,
	UserCredential,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";

export const Signin: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string | null>(null);

	const handleEmailPasswordSignUp = async (event: React.FormEvent) => {
		event.preventDefault();
		setError(null);

		try {
			const userCredential: UserCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log("User signed up:", userCredential.user);
		} catch (error) {
			setError((error as AuthError).message);
		}
	};

	const handleGoogleSignIn = async () => {
		const provider = new GoogleAuthProvider();
		try {
			const result: UserCredential = await signInWithPopup(auth, provider);
			console.log("Google sign in:", result.user);
		} catch (error) {
			setError((error as AuthError).message);
		}
	};

	const handleFacebookSignIn = async () => {
		const provider = new FacebookAuthProvider();
		try {
			const result: UserCredential = await signInWithPopup(auth, provider);
			console.log("Facebook sign in:", result.user);
		} catch (error) {
			setError((error as AuthError).message);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="mx-5 text-5xl self-start uppercase font-bold pb-5">Sign In</h1>
			<p className="mx-5 py-5 self-start">
				¿Aún no tienes una cuenta? <span>Crea tu cuenta</span> y empieza a registrar tu progreso de
				escalada.
			</p>
			{error && <p className="text-red-500 mb-4">{error}</p>}
			<form onSubmit={handleEmailPasswordSignUp} className="space-y-4">
				<div>
					<label htmlFor="email" className="block uppercase font-bold">
						Email
					</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500"
					/>
				</div>
				<div>
					<label htmlFor="password" className="block uppercase font-bold">
						Password
					</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm"
					/>
				</div>
				<button
					type="submit"
					className=" btn btn-primary uppercase w-full font-bold focus:outline-none">
					Sign Up with Email
				</button>
			</form>
			<hr className="my-4" />
			<button
				onClick={handleGoogleSignIn}
				className="w-11/12 font-bold mb-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 ">
				Sign In with Google
			</button>
			<button
				onClick={handleFacebookSignIn}
				className="w-11/12 font-bold bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900">
				Sign In with Facebook
			</button>
		</div>
	);
};
