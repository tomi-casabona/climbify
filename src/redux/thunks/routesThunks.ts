import { doc, setDoc, getDoc, addDoc } from "firebase/firestore";
import { Route } from "../../types/dataTypes";
import { auth, db } from "../../firebase/firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRoutes = createAsyncThunk(
  "routes/fetchRoutess",
  async () => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, user.uid, "routes");
      const routesDoc = await getDoc(docRef);
      if (routesDoc.exists()) {
        return routesDoc.data().routes as Route[];
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
      await setDoc(docRef, { routes: routes })
      return routes;
    } else {
      throw new Error('No authenticated user');
    }
  }
);