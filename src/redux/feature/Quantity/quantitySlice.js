import { createSlice } from "@reduxjs/toolkit";

export const quantitySlice = createSlice({
  name: "quantity",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    resetquantity: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, resetquantity } =
  quantitySlice.actions;

export default quantitySlice.reducer;
