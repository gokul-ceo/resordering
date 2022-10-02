import { createSlice } from "@reduxjs/toolkit";

export const totalSlice = createSlice({
    name:'total',
    initialState:{
        total:0,
        ItemsforTotal : []
    },reducers:{
        addamount:(state,action)=>{
            state.total += action.payload
        },
        reduceamount:(state,action)=>{
            state.total -= action.payload
        }
    }
})

export const {addamount,reduceamount } = totalSlice.actions;
export default totalSlice.reducer;