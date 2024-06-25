import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  AuthError,
  UserCredential,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleEmailPasswordLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);
      navigate("/home");
    } catch (error) {
      setError((error as AuthError).message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (error) {
      setError((error as AuthError).message);
    }
  };

  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      console.log("Facebook sign in:", result.user);
      navigate("/home");
    } catch (error) {
      setError((error as AuthError).message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mx-5 text-5xl self-start uppercase font-bold">Login</h1>
      <p className="mx-5 py-2 self-start">
        ¿Aún no tienes una cuenta?{" "}
        <span
          className="font-bold underline"
          onClick={() => navigate("/signIn")}
        >
          Crea tu cuenta
        </span>{" "}
        y empieza a registrar tu progreso de escalada.
      </p>
      <p className="self-start mx-5 py-2">¡Conviértete en un climber!</p>
      <div className="p-6 rounded-lg shadow-md w-full max-w-md">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleEmailPasswordLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block uppercase font-bold ">
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
            className=" btn btn-primary uppercase w-full font-bold focus:outline-none"
          >
            Login
          </button>
        </form>
        <hr className="my-4" />
        <button
          onClick={handleGoogleSignIn}
          className="w-full font-bold bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 mb-2"
        >
          Login with Google
        </button>
        <button
          onClick={handleFacebookSignIn}
          className="w-full font-bold bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900"
        >
          Login with Facebook
        </button>
      </div>
    </div>
  );
};
