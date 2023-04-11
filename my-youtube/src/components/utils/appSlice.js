import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenOpenFlag: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenOpenFlag = !state.isMenOpenFlag;
    },
  },
});

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
