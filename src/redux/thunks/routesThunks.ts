import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { Route } from "../../types/dataTypes";
import { auth, db } from "../../firebase/firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
  async (deletingRoute: Route) => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, user.uid, 'routes');
      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        throw new Error("No such document");
      }
      const routes = docSnapshot.data()?.routes || [];
      console.log('Current routes:', routes);
      const updatedRoutes = routes.filter((route: Route) => route.routeId !== deletingRoute.routeId);
      console.log('Updated routes:', updatedRoutes);

      try {
        await deleteDoc(docRef);
        await setDoc(docRef, { routes: updatedRoutes });
        console.log('Routes successfully updated in Firebase');
      } catch (error) {
        console.error('Error updating routes in Firebase:', error);
        throw error;
      }

      return updatedRoutes;
    } else {
      throw new Error('No authenticated user');
    }
  }
);
