import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { Route } from "../../types/dataTypes";
import { auth, db } from "../../firebase/firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const fetchRoutes = createAsyncThunk(
  "routes/fetchRoutes",
  async () => {
    const user = auth.currentUser;
    if (user) {
      const routesDoc = await getDoc(doc(db, user.uid, "routes"));
      if (routesDoc.exists()) {
        const data = routesDoc.data();
        return data.routes as Route[];
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
      const docRef = doc(db, user.uid, "routes");
      if ((await getDoc(docRef)).exists()) {
        await updateDoc(docRef, { routes: routes });
      } else {
        await setDoc(docRef, { routes: routes });
      }
      return routes;
    } else {
      throw new Error('No authenticated user');
    }
  }
);

export const deleteRoute = createAsyncThunk(
  'routes/deleteRoute',
  async (deletingRoute: Route, { getState }) => {
    const user = auth.currentUser;
    const state = getState() as RootState;
    const newDoc = state.routes.data?.filter((route: Route) => route.routeId != deletingRoute.routeId)
    if (user) {
      const docRef = doc(db, user.uid, "routes");
      if ((await getDoc(docRef)).exists()) {
        await deleteDoc(docRef);
        await setDoc(docRef, newDoc ? { routes: newDoc } : { routes: [] })
        return newDoc;
      } else {
        throw new Error("No such document");
      }
    } else {
      throw new Error('No authenticated user');
    }
  }
);
