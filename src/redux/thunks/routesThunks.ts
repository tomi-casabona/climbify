import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { Route } from "../../types/dataTypes";
import { auth, db } from "../../firebase/firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRoutes = createAsyncThunk(
  "routes/fetchRoutess",
  async () => {
    const user = auth.currentUser;
    if (user) {
      const routesDoc = await getDoc(doc(db, user.uid, "routes"));
      if (routesDoc.exists()) {
        const data = routesDoc.data();
        return data.routes as Route[]
      } else {
        throw new Error("No such document");
      }
    } else {
      throw new Error("No user is logged in");
    }
  }
);

export const updateRoutes = createAsyncThunk(
  'routes/updateRoutes',
  async (routes: Route[]) => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, user.uid, "routes")
      if ((await getDoc(docRef)).exists()) {
        await updateDoc(docRef, { routes: routes })
      } else {
        await setDoc(docRef, { routes: routes })
      }
      return routes;
    } else {
      throw new Error('No authenticated user');
    }
  }
);


// Thunk para eliminar una ruta específica
export const deleteRoute = createAsyncThunk(
  'routes/deleteRoute',
  async (deletingRoute: Route) => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, user.uid, 'routes');
      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        throw new Error("No such document");
      }
      const routes = docSnapshot.data()?.routes || [];
      const updatedRoutes = routes.filter((route: Route) => route.routeId !== deletingRoute.routeId);

      await updateDoc(docRef, { routes: updatedRoutes });

      return updatedRoutes;
    } else {
      throw new Error('No authenticated user');
    }
  }
);