import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
    name:'userdetails',
    initialState:{
        name:'',
        phone:''
    },reducers:{
        addmydetails:(state,action)=>{
            state.name = action.payload.name;
            state.phone = action.payload.phone;
        }
    }
})

export const {addmydetails} = UserSlice.actions
export default UserSlice.reducer;