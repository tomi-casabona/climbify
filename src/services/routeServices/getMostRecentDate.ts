import type { Attempt } from "../../types/dataTypes";

export const getMostRecentDate = (attempts: Attempt[]): Date => {
    const sortedAttempts = attempts.slice().sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    return new Date(sortedAttempts[0].date);
};