import { createSlice } from "@reduxjs/toolkit";

export const resetSlice = createSlice({
    name:'cartreset',
    initialState:{
        value:false
    },reducers:{
        informreset:(state)=>{
            state.value = true
        }
        
    }
})

export const {informreset} = resetSlice.actions;
export default resetSlice.reducer;