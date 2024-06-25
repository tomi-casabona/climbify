import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { School } from "../../types/dataTypes";
import { auth, db } from "../../firebase/firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSchools = createAsyncThunk(
  "schools/fetchSchools",
  async () => {
    const user = auth.currentUser;
    if (user) {
      const schoolsDoc = await getDoc(doc(db, user.uid, "schools"));
      if (schoolsDoc.exists()) {
        const data = schoolsDoc.data();
        return data.schools as School[]
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
      const docRef = doc(db, user.uid, "schools")
      if ((await getDoc(docRef)).exists()) {
        await updateDoc(docRef, { schools: schools })
      } else {
        await setDoc(docRef, { schools: schools })
      }
      return schools;
    } else {
      throw new Error('No authenticated user');
    }
  }
);

// Thunk para eliminar una ruta específica
export const deleteSchool = createAsyncThunk(
  'school/deleteSchool',
  async (deletingSchool: School) => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, user.uid, 'schools');
      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        throw new Error("No such document");
      }
      const schools = docSnapshot.data()?.schools || [];
      const updatedSchools = schools.filter((school: School) => school.schoolId !== deletingSchool.schoolId);

      await setDoc(docRef, { routes: updatedSchools });

      return updatedSchools;
    } else {
      throw new Error('No authenticated user');
    }
  }
);