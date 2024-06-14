import { doc, setDoc, getDoc, addDoc } from "firebase/firestore";
import { Location } from "../../types/dataTypes";
import { auth, db } from "../../firebase/firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  async () => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, user.uid, "locations");
      const locationsDoc = await getDoc(docRef);
      if (locationsDoc.exists()) {
        return locationsDoc.data().locations as Location[];
      } else {
        throw new Error("No such document");
      }
    } else {
      throw new Error("No user is logged in");
    }
  }
);

export const updateLocations = createAsyncThunk(
  'locations/updateLocations',
  async (locations: Location[]) => {
    const user = auth.currentUser;
    if (user) {
      // Hay coleccion llamada user.uid?
      const docRef = doc(db, user.uid, "locations")
      await setDoc(docRef, { locations: locations })
      return locations;
    } else {
      throw new Error('No authenticated user');
    }
  }
);