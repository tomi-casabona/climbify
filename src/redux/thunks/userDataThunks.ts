import { doc, setDoc, getDoc } from "firebase/firestore";
import { UserData } from "../types/userDataTypes";
import { auth, db } from "../../firebase/firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk(
  "userData/fetchUserData",
  async () => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, "climbify", user.uid);
      const userDoc = await getDoc(docRef);
      if (userDoc.exists()) {
        return userDoc.data() as UserData;
      } else {
        throw new Error("No such document");
      }
    } else {
      throw new Error("No user is logged in");
    }
  }
);

export const updateUserData = createAsyncThunk(
  'user/updateUserData',
  async (userData: UserData) => {
    const user = auth.currentUser;
    if (user) {
      await setDoc(doc(db, "climbify", user.uid), userData)
      return userData;
    } else {
      throw new Error('No authenticated user');
    }
  }
);