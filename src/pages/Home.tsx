import { useSelector } from "react-redux";
import type { RootState } from "@reduxjs/toolkit/query";

export const Home: React.FC = () => {
  const usuario = useSelector((state: RootState) => state.user);

  return (
    <>
      <h2>Hello {usuario ? usuario.info.displayName : "Guest"}</h2>
      <h2>Hello {usuario ? usuario.info.email : "Guest"}</h2>
      <img src={usuario.info.photoURL} alt="" />
      <p>QUE CHICO MAS GUAPETON</p>
    </>
  );
};
