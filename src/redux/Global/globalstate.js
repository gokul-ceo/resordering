import { createSlice } from "@reduxjs/toolkit";

export const Globalstate = createSlice({
  name: "Gstate",
  initialState: {
    iscartclicked: false,
  },
  reducers: {
    infomcartclick: (state) => {
      if (state.iscartclicked) {
        state.iscartclicked = false;
      } else {
        state.iscartclicked = true;
      }
    },
  },
});

export const { infomcartclick } = Globalstate.actions;
export default Globalstate.reducer;
