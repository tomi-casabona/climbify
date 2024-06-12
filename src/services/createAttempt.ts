import { UserData } from "../redux/types/userDataTypes"

export const createAttempt = () => {
    const attempt = {
        id: crypto.randomUUID,
        date: new Date(),
        comments: "",
        completed: false,
    }
    return attempt;
}