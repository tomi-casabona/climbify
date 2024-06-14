import { createSlice } from "@reduxjs/toolkit";
import { LocationState } from "../../types/dataTypes";
import { fetchLocations, updateLocations } from "../thunks/locationsThunks";

const initialState: LocationState = {
  data: null,
  status: "idle",
  error: null,
};

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(updateLocations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateLocations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(updateLocations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
  },
});

export default locationsSlice.reducer;