import { doc, setDoc, getDoc, addDoc } from "firebase/firestore";
import { Sector } from "../../types/dataTypes";
import { auth, db } from "../../firebase/firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSectors = createAsyncThunk(
  "sectors/fetchSectors",
  async () => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, user.uid, "sectors");
      const sectorsDoc = await getDoc(docRef);
      if (sectorsDoc.exists()) {
        return sectorsDoc.data().schools as Sector[];
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
      await setDoc(docRef, { sectors: sectors })
      return sectors;
    } else {
      throw new Error('No authenticated user');
    }
  }
);