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
        removeOrder:(state,action) => {
            console.log("Item to added in final array: ",action.payload);
            state.FinalyOrderArray.push(action.payload)
            // console.log("Action Payload received to removeOrder: ",action.payload);
            // state.FinalyOrderArray = action.payload
            // if(action.payload!==undefined){
            //     state.FinalyOrderArray.push(action.payload)
            // }
            
            // state.FinalyOrderArray = action.payload
            // for(let i =0;i<state.OrderArray.length;i++){
            //     console.log("OrderItems: ",state.OrderArray[i]);
            //     if(state.OrderArray[i]!==orderItemName.payload){
            //         state.FinalyOrderArray.push(state.OrderArray[i])
            //     }
            // }
            // return {
            //     ...state,

            // }
        },
        resetOrderArray:(state)=>{
            state.OrderArray=[]
        }
    }
})
export const {addorders,removeOrder,resetOrderArray} = OrderSlice.actions
export default OrderSlice.reducer;