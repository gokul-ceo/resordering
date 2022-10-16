import { createSlice } from "@reduxjs/toolkit";

export const totalSlice = createSlice({
  name: "total",
  initialState: {
    total: 0,
    ItemsforTotal: [],
  },
  reducers: {
    addamount: (state, action) => {
      state.total += action.payload;
    },
   
    resettotal: (state) => {
      state.total = 0;
    },
  },
});

export const { addamount, resettotal } = totalSlice.actions;
export default totalSlice.reducer;
