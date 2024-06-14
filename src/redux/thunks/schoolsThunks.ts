import { doc, setDoc, getDoc } from "firebase/firestore";
import { School } from "../../types/dataTypes";
import { auth, db } from "../../firebase/firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSchools = createAsyncThunk(
  "schools/fetchSchools",
  async () => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, user.uid, "schools");
      const schoolsDoc = await getDoc(docRef);
      if (schoolsDoc.exists()) {
        return schoolsDoc.data() as School[];
      } else {
        throw new Error("No such document");
      }
    } else {
      throw new Error("No user is logged in");
    }
  }
);

export const updateSchools = createAsyncThunk(
  'schools/updateSchools',
  async (schools: School[]) => {
    const user = auth.currentUser;
    if (user) {
      await setDoc(doc(db, user.uid, "schools"), schools)
      return schools;
    } else {
      throw new Error('No authenticated user');
    }
  }
);