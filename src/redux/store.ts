import { configureStore } from "@reduxjs/toolkit";
import locationsReducer from "./slices/locationsSlice";
import schoolsReducer from "./slices/schoolsSlice";
import sectorsReducer from "./slices/sectorsSlice";
import routesReducer from "./slices/routesSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    locations: locationsReducer,
    schools: schoolsReducer,
    sectors: sectorsReducer,
    routes: routesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;