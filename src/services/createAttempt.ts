import { Attempt } from "../types/dataTypes"

export const createAttempt = (): Attempt => {
    const attempt = {
        id: crypto.randomUUID(),
        date: new Date(),
        completed: false,
    }
    return attempt;
}