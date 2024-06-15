import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase/firebase-config";
import { AppDispatch, RootState } from "./redux/store";
import { fetchLocations } from "./redux/thunks/locationsThunks";
import { fetchSchools } from "./redux/thunks/schoolsThunks";
import { fetchSectors } from "./redux/thunks/sectorsThunks";
import { fetchRoutes } from "./redux/thunks/routesThunks";
import { setUser } from "./redux/slices/userSlice";
import { getUserData } from "./services/getUserData";
import useAuth from "./hooks/useAuth";

export const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { locations, schools, sectors, routes } = useSelector(
    (state: RootState) => state
  );
  const isAuthenticated = useAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        const userData = getUserData(user);
        dispatch(fetchLocations());
        dispatch(fetchSchools());
        dispatch(fetchSectors());
        dispatch(fetchRoutes());
        dispatch(setUser(userData));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  console.log(locations, schools, sectors, routes);

  return (
    <Router>
      <div className="font-tt-hoves min-h-screen bg-light-bg dark:bg-dark-bg">
        {isAuthenticated && <Navbar />}
        <AppRoutes />
      </div>
    </Router>
  );
};
