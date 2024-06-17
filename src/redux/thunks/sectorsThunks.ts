import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { Sector } from "../../types/dataTypes";
import { auth, db } from "../../firebase/firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSectors = createAsyncThunk(
  "sectors/fetchSectors",
  async () => {
    const user = auth.currentUser;
    if (user) {
      const sectorsDoc = await getDoc(doc(db, user.uid, "sectors"));
      if (sectorsDoc.exists()) {
        const data = sectorsDoc.data();
        return data.sectors as Sector[]
      } else {
        throw new Error("No such document");
      }
    } else {
      throw new Error("No user is logged in");
    }
  }
);

export const updateSectors = createAsyncThunk(
  'sectors/updateSectors',
  async (sectors: Sector[]) => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, user.uid, "sectors")
      if ((await getDoc(docRef)).exists()) {
        await updateDoc(docRef, { sectors: sectors })
      } else {
        await setDoc(docRef, { sectors: sectors })
      }
      return sectors;
    } else {
      throw new Error('No authenticated user');
    }
  }
);
// Thunk para eliminar un sector específico
export const deleteSector = createAsyncThunk(
  'sector/deleteSector',
  async (deletingSector: Sector) => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, user.uid, 'sectors');
      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        throw new Error("No such document");
      }
      const sectors = docSnapshot.data()?.sectors || [];
      const updatedSectors = sectors.filter((sector: Sector) => sector.sectorId !== deletingSector.sectorId);

      await updateDoc(docRef, { routes: updatedSectors });

      return updatedSectors;
    } else {
      throw new Error('No authenticated user');
    }
  }
);