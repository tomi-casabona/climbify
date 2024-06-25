import { auth } from "../firebase/firebase-config";

export const initUserData = () => {
  const user = auth.currentUser;

  if (user) {
    return {
      id: user.uid,
      ascents: 0,
      locations: []
    }
  } else {
    throw new Error("User not logged in!")
  }
}