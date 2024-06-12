import { doc, setDoc, getDoc } from "firebase/firestore";
import { UserData } from "../types/userDataTypes";
import { auth, db } from "../../firebase/firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const saveUserData = createAsyncThunk(
  "userData/saveUserData",
  async (userData: UserData) => {
    const user = auth.currentUser;
    if (user) {
      await setDoc(doc(db, "userData", user.uid), userData);
    } else {
      throw new Error("No user is logged in");
    }
  }
);

export const fetchUserData = createAsyncThunk(
  "userData/fetchUserData",
  async () => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, "userData", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data() as UserData;
      } else {
        throw new Error("No such document");
      }
    } else {
      throw new Error("No user is logged in");
    }
  }
);
