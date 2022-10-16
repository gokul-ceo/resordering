import { createSlice } from "@reduxjs/toolkit";

export const resetSlice = createSlice({
  name: "cartreset",
  initialState: {
    value: false,
  },
  reducers: {
    informreset: (state) => {
      state.value = true;
      console.log("Cart reset has been noted!!");
    },
    INFO_RESET_DONE: (state) => {
      state.value = false;
      console.log("Cart reset has been reseted");
    }
  },
});

export const { informreset,INFO_RESET_DONE } = resetSlice.actions;
export default resetSlice.reducer;
