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