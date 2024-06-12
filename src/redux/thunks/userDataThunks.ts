import { doc, setDoc } from "firebase/firestore";
import { AppThunk } from "../store";
import { UserData } from "../types/userDataTypes";
import { db } from "../../firebase/firebase-config";
import { setUserData, updateAscents } from "../slices/userDataSlice";

export const saveUserData = (userData: UserData): AppThunk => async (dispatch) => {
  try {
    await setDoc(doc(db, "userData", "userData"), userData);
    console.log("User data saved successfully")

    dispatch(setUserData(userData));
    dispatch(updateAscents());
  } catch (error) {
    console.error("Error saving user data: ", error);
  }
}