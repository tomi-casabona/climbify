import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slices/userDataSlice"

const store = configureStore({
  reducer: {
    userData: userDataReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = (dispatch: AppDispatch, getState: () => RootState) => ReturnType;

export default store;