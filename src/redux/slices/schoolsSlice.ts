import { createSlice } from "@reduxjs/toolkit";
import { State } from "../../types/dataTypes";
import { fetchSchools, updateSchools } from "../thunks/schoolsThunks";

const initialState: State = {
  data: null,
  status: "idle",
  error: null,
};

const schoolsSlice = createSlice({
  name: "schools",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchools.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSchools.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchSchools.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(updateSchools.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateSchools.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(updateSchools.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
  },
});

export default schoolsSlice.reducer;