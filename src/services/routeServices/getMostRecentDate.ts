import type { Attempt } from "../../types/dataTypes";

export const getMostRecentDate = (attempts: Attempt[]) => {
    if (attempts.length === 0) return "";
    const sortedAttempts = attempts.slice().sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    const lastAttempt = new Date(sortedAttempts[0].date)
    const day = lastAttempt.getDay()
    const month = lastAttempt.getMonth()
    const year = lastAttempt.getFullYear()

    return day + "/" + month + "/" + year

};