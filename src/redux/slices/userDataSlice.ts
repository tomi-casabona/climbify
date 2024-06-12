import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserData } from "../types/userDataTypes";
import { fetchUserData } from "../thunks/userDataThunks";

interface UserState {
  data: UserData | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  data: null,
  status: "idle",
  error: null,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateUserData(state, action: PayloadAction<UserState>) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { updateUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
