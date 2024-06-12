import { Attempt } from "../redux/types/userDataTypes"

export const createAttempt = (): Attempt => {
    const attempt = {
        id: crypto.randomUUID(),
        date: new Date(),
        comments: "",
        completed: false,
    }
    return attempt;
}