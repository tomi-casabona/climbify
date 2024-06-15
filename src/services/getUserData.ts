import type { User } from "firebase/auth";
import type { UserData } from "../types/dataTypes";

export const getUserData = (user: User): UserData => {
    const userData = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
    };
    return userData
}
