import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenOpenFlag: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenOpenFlag = !state.isMenOpenFlag;
    },
    closeMenu: (state) => {
      state.isMenOpenFlag = false;
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
