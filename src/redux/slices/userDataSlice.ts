import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserData } from "../types/userDataTypes";

const initialState: UserData = {
  ascents: 0,
  locations: null
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserData>) {
      return action.payload;
    },
    updateAscents(state) {
      let totalAscents = 0;
      state.locations?.forEach(location => {
        location.schools.forEach(school => {
          school.sectors.forEach(sector => {
            sector.routes.forEach(route => {
              if (route.completed) {
                totalAscents++;
              }
            })
          })
        })
      })
      state.ascents = totalAscents;
    }
  }
})

export const { setUserData, updateAscents } = userDataSlice.actions;
export default userDataSlice.reducer;