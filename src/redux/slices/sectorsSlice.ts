import { createSlice } from "@reduxjs/toolkit";
import { State } from "../../types/dataTypes";
import { fetchSectors, updateSectors } from "../thunks/sectorsThunks";

const initialState: State = {
  data: null,
  status: "idle",
  error: null,
};

const sectorsSlice = createSlice({
  name: "sectors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSectors.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSectors.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchSectors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(updateSectors.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateSectors.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(updateSectors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
  },
});

export default sectorsSlice.reducer;