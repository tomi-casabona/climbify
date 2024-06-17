import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { Location } from "../../types/dataTypes";
import { auth, db } from "../../firebase/firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  async () => {
    const user = auth.currentUser;
    if (user) {
      const locationsDoc = await getDoc(doc(db, user.uid, "locations"));
      if (locationsDoc.exists()) {
        const data = locationsDoc.data();
        return data.locations as Location[]
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
      if ((await getDoc(docRef)).exists()) {
        await updateDoc(docRef, { locations: locations })
      } else {
        await setDoc(docRef, { locations: locations })
      }
      return locations;
    } else {
      throw new Error('No authenticated user');
    }
  }
);


// Thunk para eliminar una location específica
export const deleteLocation = createAsyncThunk(
  'location/deleteLocation',
  async (deletingLocation: Location) => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, user.uid, 'locations');
      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        throw new Error("No such document");
      }
      const locations = docSnapshot.data()?.locations || [];
      const updatedLocations = locations.filter((location: Location) => location.locationId !== deletingLocation.locationId);

      await setDoc(docRef, { routes: updatedLocations });

      return updatedLocations;
    } else {
      throw new Error('No authenticated user');
    }
  }
);