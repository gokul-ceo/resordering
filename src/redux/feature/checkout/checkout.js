import { createSlice } from "@reduxjs/toolkit";
export const checkoutSlice = createSlice({
    name:'FinalCheckoutArray',
    initialState:{
        finalarray:[]
    },reducers:{
        AddOrders:(state,action) => {
            state.finalarray.push(action.payload)
        }
    }
})


export const {AddOrders} = checkoutSlice.actions
export default checkoutSlice.reducer;