import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/dataTypes";

const initialState: UserState = {
    info: null,
    status: "idle",
    error: null,
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.info = action.payload;
        },
        setLoading: (state) => {
            state.status = "loading";
        },
        setError: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const { setUser, setLoading, setError, clearError } = userSlice.actions;
export default userSlice.reducer;