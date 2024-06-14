import { createSlice } from "@reduxjs/toolkit";
import { State } from "../../types/dataTypes";
import { fetchRoutes, updateRoutes } from "../thunks/routesThunks";

const initialState: State = {
  data: null,
  status: "idle",
  error: null,
};

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoutes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRoutes.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchRoutes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(updateRoutes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateRoutes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(updateRoutes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
  },
});

export default routesSlice.reducer;