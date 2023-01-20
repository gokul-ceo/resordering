import { createSlice } from "@reduxjs/toolkit";
import { getitemstatus } from "../../worker";
export const Menu_State_Slice = createSlice({
    name:"Menustatus",
    initialState:{
        Menustates:[]
    },
    reducers:{
        UPDATE_MENU_STATUS:(state,action)=>{
            state.Menustates = action.payload
        }
    }
})
export const {UPDATE_MENU_STATUS} = Menu_State_Slice.actions;
export default Menu_State_Slice.reducer;