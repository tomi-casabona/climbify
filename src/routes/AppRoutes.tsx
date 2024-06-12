import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Signin } from "../pages/Signin";
import { Home } from "../pages/Home";
import { ProtectedRoute } from "./ProtectedRote";
import { Formulario } from "../components/Formulario";
import React from "react";
import { auth } from "../firebase/firebase-config";

export const AppRoutes = () => {
  //const isLogged: boolean = useSelector((state: any) => state.user.isLogged);
  const [isLogged, setIsLoggeed] = React.useState<boolean>(false);

  // mover a redux o context

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggeed(!!user);
    });

    return () => unsubscribe();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signIn" element={<Signin />} />
      <Route element={<ProtectedRoute isAuthorized={isLogged} />}>
        <Route path="/home" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
      </Route>
    </Routes>
  );
};
