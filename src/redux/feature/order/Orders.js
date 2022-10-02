import { createSlice } from "@reduxjs/toolkit";




export const OrderSlice = createSlice({
    name:'Orders',
    initialState:{
        OrderArray:[],
        FinalyOrderArray:[]
        
   

    },reducers:{
        addorders:(state,action) => {
            var currentorder = action.payload
            console.log("Current Payload: ",currentorder);
            if(action.payload!==undefined){ state.OrderArray.push(currentorder)}
           
            // console.log("Action Payload recieved: ",currentorder);
            // console.log("OrderArray: ",{(state)=>state.OrderArray});
            
        },
        updatequantity:(state,action)=>{
            
        }
    }
})
export const {addorders,tempupdate,updatequantity} = OrderSlice.actions
export default OrderSlice.reducer;